import express from "express";

import * as db from "./db.mjs";

const articleRouter = express.Router();

articleRouter.get("/", async (request, response) => {
  const articles = await db.getArticles();
  response.json(articles);
});

articleRouter.get("/:sloug", async (request, response) => {
  const sloug = request.params.sloug;
  const article = await db.getArticle({sloug});
  response.json(article);
})

articleRouter.use(express.json());
articleRouter.post("/", async (request, response) => {
  const params1 = {
    title: request.body.title, 
    country: request.body.country, 
    overview: request.body.overview,
    imageurl: request.body.imageurl,
    date: request.body.date,
    slug: request.body.slug
  }
  const params2 = {
    country: request.body.country, 
    region: request.body.region, 
    description: request.body.description,
    imgurl: request.body.imgurl
  }
  const article = await db.addArticle(params1);
  const destination = await db.addDestination(params2);
 
  response.status(201).json({ article, destination });
});

export default articleRouter;