import * as React from "react";
import { useState, useEffect } from "react";

import CountryPage from "./CountryPage";

import * as apiClient from "./apiClient";

function Articles({articles, setArticles}) {
  const [groupedArticles, setGroupedArticles] = useState({});
  const articlesToGroupedArticles = localArticles => {
    const localGroupedArticles = {};
    // console.log(articles);
    for(let i = 0; i < articles.length; i++) {
      const article = localArticles[i];
      if(localGroupedArticles[article.country] === undefined){
        localGroupedArticles[article.country] = [];
      }
      localGroupedArticles[article.country].push(article);
    }
    // console.log(localGroupedArticles);
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
  // console.log("object", Object.entries(groupedArticles))
  const [countryPages, setCountryPages] = useState([]);
  useEffect(() => {
    const temp = Object.keys(groupedArticles).map((countryName) => {
      return <CountryPage countryName={countryName} destinations={groupedArticles[countryName]}/>
    })
    setCountryPages(temp);
  }, [groupedArticles]);
  console.log("countryPages",countryPages)
  if(countryPages.length === 0) {
    return "loading..."
  }
  return <div>
      {
        countryPages
      }
    </div>
    // "hello"
    
    // <div>
    //   {articles.map((article) => (
    
    //   ))} 

    // </div>
  
}

export default Articles;