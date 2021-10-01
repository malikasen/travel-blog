import * as React from 'react';
import {
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';

import PostPage from "./PostPage";

import * as apiClient from "./apiClient";
import "./App.css";


function Post() {
  const [article, setArticle] = useState([]);
  let { sloug } = useParams();
  const [groupedArticle, setGroupedArticle] = useState({});

  const articleToGroupedArticle = localArticle => {
    console.log("grouping function called")
    const localGroupedArticle = {};
    for(let i = 0; i < localArticle.length; i++) {
      const post = localArticle[i];
      console.log("in the loop");
      if(localGroupedArticle[post.country] === undefined){
        localGroupedArticle[post.country] = [];
      }
      localGroupedArticle[post.country].push(post);
    }
    return localGroupedArticle;
  };
  const loadArticle = async () => {
    return setArticle(await apiClient.getArticle({ sloug }))
  }
  useEffect(async() => {
    loadArticle();
  }, [])

  useEffect(() => {
    setGroupedArticle(articleToGroupedArticle(article))
  }, [article]);

  console.log("article", article);
  console.log("groupedArticle", groupedArticle);

  const [postPage, setPostPage] = useState([]);

  useEffect(() => {
    const temp = Object.keys(groupedArticle).map((countryName) => {
      return <PostPage countryName={countryName} destinations={groupedArticle[countryName]}/>
    });
    setPostPage(temp);
  }, [groupedArticle]);

  if(postPage.length === 0) {
    return "loading..."
  }

  return (
    <div>
      {postPage}
      {/* <h1>{article.title}</h1> */}
      {/* <p>{article.postdate.substring(0,10)}</p> */}
      {/* <p>{article.overview}</p> */}
      {/* <img className="photo" src={article.imageurl}></img> */}
    </div>
  )
}
export default Post;