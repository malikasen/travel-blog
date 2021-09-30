import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getArticle = () => {
  return db.any("SELECT articles.*, destinations.destination, destinations.description, destinations.imgurl FROM articles RIGHT JOIN destinations ON articles.country=destinations.country ORDER BY articles.postdate");
}
// "SELECT articles.*, STRING_AGG(destinations.title, ';'), STRING_AGG(destinations.description, ';'), STRING_AGG(destinations.imgurl, ';') FROM articles RIGHT JOIN destinations ON articles.country=destinations.country GROUP BY articles.country ORDER BY articles.postdate"

export const addArticle = ({title, country, overview, imageurl, date}) => 
  db.one("INSERT INTO articles(title, country, overview, imageurl, postdate) VALUES(${title}, ${country}, ${overview}, ${imageurl}, ${date}) RETURNING *", { title, country, overview, imageurl, date });
export const addDestination = ({country, region, description, imgurl}) => {
  console.log("addDestination function is called")
  return db.one("INSERT INTO destinations(country, destination, description, imgurl) VALUES(${country}, ${region}, ${description}, ${imgurl}) RETURNING *", { country, region, description, imgurl });
}
  

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
