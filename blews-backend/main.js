import express from "express";
import cors from "cors";
import {getPage} from "./dbconnection.js"

const PORT = 42069;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/page/:page", async (req, res, next) =>
{
	try
	{
		const page = req.params.page;
		const pages = await getPage(page);
		if (pages === undefined) res.status(404).send("Not found");
		else res.status(200).send(pages);
	}
	catch (e)
	{
		next(e);
	}
});

app.use(express.static("../blews-frontend/dist"));

app.listen(PORT, () =>
{
	console.log("blews backend listening at " + PORT);
});