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

  useEffect(async() => {
    setArticle(await apiClient.getArticle({ sloug }));
  }, [])
  return (
    <div>
      <h1>{article.title}</h1>
      <img className="photo" src={article.imageurl}></img>
    </div>
  )
}
export default Post;