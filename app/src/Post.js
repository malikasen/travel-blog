import * as React from 'react';
import {
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import * as apiClient from "./apiClient";
import "./App.css";


function Post() {
  const [article, setArticle] = useState({});
  let { sloug } = useParams();
  const [groupedArticle, setGroupedArticle] = useState({});
  const articleToGroupedArticle = localArticle => {
    const localGroupedArticle = {};
    for(let i = 0; i < article.length; i++) {
      const article = localArticle[i];
      if(localGroupedArticle[article.country] === undefined){
        localGroupedArticle[article.country] = [];
      }
      localGroupedArticle[article.country].push(article);
    }
    return localGroupedArticle;
  };

  useEffect(async() => {
    setArticle(await apiClient.getArticle({ sloug }));
  }, [])

  useEffect(() => {
    setGroupedArticle(articleToGroupedArticle(article))
  }, [article]);
  console.log("article", article);
  console.log("groupedArticle", groupedArticle);
  return (
    <div>
      <h1>{article.title}</h1>
      {/* <p>{article.postdate.substring(0,10)}</p> */}
      <p>{article.overview}</p>
      <img className="photo" src={article.imageurl}></img>
    </div>
  )
}
export default Post;