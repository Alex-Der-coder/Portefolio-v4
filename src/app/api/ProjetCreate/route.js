import clientPromise from "../../../lib/mongodb";

export const POST = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");
        const objectToAdd = await req.json(); // assuming the body is JSON
        
        const result = await db.collection("Portefolio").insertOne(objectToAdd);
        if (result.acknowledged && result.insertedId) {
            return new Response(JSON.stringify({
                message: "Object added successfully",
                insertedId: result.insertedId
            }), {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            throw new Error("Failed to add object to portfolio");
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
