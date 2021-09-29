import express from "express";

import * as db from "./db.mjs";

const articleRouter = express.Router();

articleRouter.get("/", async (request, response) => {
  const article = await db.getArticle();
  console.log(article);
  response.json(article);
});

articleRouter.use(express.json());
articleRouter.post("/", async (request, response) => {
  console.log("body", request.body);
  const params = {
    title: request.body.title, 
    country: request.body.country, 
    overview: request.body.overview
  }
  console.log(params);
  const article = await db.addArticle(params);
  response.status(201).json(article);
});

export default articleRouter;