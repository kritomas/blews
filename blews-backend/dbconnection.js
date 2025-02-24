import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config()

const client = new MongoClient(process.env.URI)
await client.connect();

const collection = client.db("webnews").collection("idnes");

const PAGE_SIZE = 10

export async function getPage(page)
{
	return collection.find().skip(PAGE_SIZE * page).limit(PAGE_SIZE).toArray();
}