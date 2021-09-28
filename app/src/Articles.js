import * as React from "react";
import { useState, useEffect } from "react";

import CountryPage from "./CountryPage";

import * as apiClient from "./apiClient";

function Articles({articles, setArticles}) {
  const [groupedArticles, setGroupedArticles] = useState({});
  const articlesToGroupedArticles = localArticles => {
    const localGroupedArticles = {};
    console.log(articles);
    for(let i = 0; i < articles.length; i++) {
      const article = localArticles[i];
      if(localGroupedArticles[article.country] === undefined){
        localGroupedArticles[article.country] = [];
      }
      localGroupedArticles[article.country].push(article);
    }
    console.log(localGroupedArticles);
    return localGroupedArticles;
  };
  
  
  const loadArticles = async () => {
    return await apiClient.getArticles()
    .then((json) => {
      setArticles(json);
    }) 
  }

  useEffect(() => {
    loadArticles();
  }, [])
  useEffect(() => {
    // console.log("articles", articles);
    setGroupedArticles(articlesToGroupedArticles(articles))
  }, [articles])
  console.log(Object.entries(groupedArticles))
  return (
    "hello"
    // {
    //   Object.entries(groupedArticles).map((countryName, destinations) => {
    //     return <CountryPage countryName={countryName} destinations={destinations}/>
    //   })
    // }
    // <div>
    //   {articles.map((article) => (
    //     <div key={article.id}>
    //       <h3>{article.title}</h3>
    //       <h3>{article.country}</h3>
    //       <p>{article.postdate}</p>
    //       <p>{article.overview}</p>
    //       <p>{article.destination}</p>
    //     </div>
    //   ))} 

    // </div>
  )
}

export default Articles;