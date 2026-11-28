import { Collection, MongoClient } from "mongodb";
import { connection } from "next/server";
import { Joke } from "./app/types/jokes";

const client = new MongoClient(process.env.MONGODB_URI!);

export const jokesCollection: Collection<Joke> = client.db("jokes").collection<Joke>("joke");

export const getJokes = async() => {
    await connection();

    if (await jokesCollection.countDocuments() === 0) {
        const response = await fetch("https://sampleapis.assimilate.be/jokes/goodJokes");
        const json : Joke[] = await response.json();
        await jokesCollection.insertMany(json);
    }

    const jokes = await jokesCollection.find().toArray();

    return jokes;
}