import { ObjectId } from 'mongodb';
import clientPromise from "../../../lib/mongodb";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("API");

        // Assurez-vous que le corps de la requête est en JSON
        const body = await req.json(); // Utilisez `req.json()` pour extraire le JSON
        const { id, ...updatedFields } = body;
        console.log("ID récupéré du corps de la requête :", id);

        if (!id) {
            return NextResponse.json({ error: 'Missing ID parameter' }, { status: 400 });
        }

        try {
            const projects = await db.collection("Portefolio").find({}).toArray();
            console.log(projects);

            const projectToUpdate = projects.find(project => project.id.toString() === id);

            console.log("Résultat de la recherche :", projectToUpdate);

            if (!projectToUpdate) {
                return NextResponse.json({ error: "Project not found" }, { status: 404 });
            }
            console.log("Identifiant unique du projet :", projectToUpdate._id);
            
            const projectId = projectToUpdate._id.toString();
            const projectIdWithoutPrefix = projectId.substring();
            console.log(projectIdWithoutPrefix);

            const result = await db.collection("Portefolio").updateOne(
                { _id: ObjectId(projectIdWithoutPrefix) },
                { $set: updatedFields }
            );
            console.log("Résultat de la mise à jour :", result);

            if (result.matchedCount > 0) {
                if (result.modifiedCount > 0) {
                    return NextResponse.json({ message: "Project updated successfully" }, { status: 200 });
                } else {
                    return NextResponse.json({ message: "No changes made to the project" }, { status: 200 });
                }
            } else {
                return NextResponse.json({ error: "Project not found" }, { status: 404 });
            }
        } catch (error) {
            console.error(error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
