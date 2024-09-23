import clientPromise from "../../../lib/mongodb";
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("API");

        // Récupérer tous les projets de la collection "Portefolio"
        const projects = await db.collection("Portefolio").find({}).toArray();
        console.log("Projets récupérés :", projects);

        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
