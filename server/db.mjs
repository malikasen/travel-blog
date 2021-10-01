import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getArticles = () => {
  return db.any("SELECT articles.*, destinations.destination, destinations.description, destinations.imgurl FROM articles RIGHT JOIN destinations ON articles.country=destinations.country ORDER BY articles.postdate");
}

export const getArticle = ({sloug}) => {
  return db.any("SELECT articles.*, destinations.destination, destinations.description, destinations.imgurl FROM articles RIGHT JOIN destinations ON articles.country=destinations.country WHERE sloug=${sloug}", {sloug})
}

export const addArticle = ({title, country, overview, imageurl, date, slug}) => 
  db.one("INSERT INTO articles(title, country, overview, imageurl, postdate, sloug) VALUES(${title}, ${country}, ${overview}, ${imageurl}, ${date}, ${slug}) RETURNING *", { title, country, overview, imageurl, date, slug });
export const addDestination = ({country, region, description, imgurl}) => {
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
