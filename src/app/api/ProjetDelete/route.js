import { ObjectId } from 'mongodb';
import clientPromise from "../../../lib/mongodb";

export const DELETE = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");
        
        // Récupérer l'ID depuis la requête
        const { id } = await req.json(); 
        console.log("ID récupéré du corps de la requête :", id);

        // Vérifier si l'ID est fourni
        if (!id) {
            return new Response(JSON.stringify({ error: 'Missing ID parameter' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        try {
            const projects = await db.collection("Portefolio").find({}).toArray();
            console.log(projects);

            // Chercher le projet correspondant à l'ID dans le tableau de tous les projets
            const projectToUpdate = projects.find(project => project.id.toString() === id);
            console.log("Résultat de la recherche  :", projectToUpdate);

            if (!projectToUpdate) {
                return new Response(JSON.stringify({ error: "Project not found" }), {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            console.log("Identifiant unique du projet :", projectToUpdate._id);
            
            const projectId = projectToUpdate._id.toString();

            // Supprimer le projet avec l'ID spécifié
            const result = await db.collection("Portefolio").deleteOne({ _id: new ObjectId(projectId) });
            console.log("Résultat de la suppression :", result);

            if (result.deletedCount > 0) {
                return new Response(JSON.stringify({ message: "Project deleted successfully" }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            } else {
                return new Response(JSON.stringify({ error: "Project not found" }), {
                    status: 404,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
