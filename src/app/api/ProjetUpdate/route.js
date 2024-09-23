import { ObjectId } from 'mongodb';
import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("API");

        
        const { id, ...updatedFields } = await req.json();
        console.log(updatedFields);
        console.log("ID récupéré du corps de la requête :", id);

        if (!id) {
            return new Response('Missing ID parameter', { status: 400 });
        }

        const projects = await db.collection("Portefolio").find({}).toArray();
        console.log(projects);

        const projectToUpdate = projects.find(project => project.id.toString() === id);
        console.log("Résultat de la recherche  :", projectToUpdate);

        if (!projectToUpdate) {
            return new Response("Project not found", { status: 404 });
        }
        console.log("Identifiant unique du projet :", projectToUpdate._id);
        
        const projectId = projectToUpdate._id.toString();

        const result = await db.collection("Portefolio").updateOne(
            { _id: new ObjectId(projectId) },
            { $set: updatedFields }
        );
        console.log("Résultat de la mise à jour :", result);

        if (result.matchedCount > 0) {
            if (result.modifiedCount > 0) {
                return new Response(JSON.stringify({ message: "Project updated successfully" }), { status: 200 });
            } else {
                return new Response(JSON.stringify({ message: "No changes made to the project" }), { status: 204 });
            }
        } else {
            return new Response("Project not found", { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
