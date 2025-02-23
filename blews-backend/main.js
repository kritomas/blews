import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const PORT = 42069;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () =>
{
	console.log("blews backend listening at " + PORT);
});