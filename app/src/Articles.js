import * as React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryPage from "./CountryPage";
import "./App.css";

// import * as apiClient from "./apiClient";

function Articles({articles, setArticles, loadArticles}) {
  const [groupedArticles, setGroupedArticles] = useState({});
  const articlesToGroupedArticles = localArticles => {
    const localGroupedArticles = {};
    for(let i = 0; i < articles.length; i++) {
      const article = localArticles[i];
      if(localGroupedArticles[article.country] === undefined){
        localGroupedArticles[article.country] = [];
      }
      localGroupedArticles[article.country].push(article);
    }
    return localGroupedArticles;
  };
  
  // const loadArticles = async () => {
  //   return await apiClient.getArticles()
  //   .then((json) => {
  //     setArticles(json);
  //   }) 
  // }

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    setGroupedArticles(articlesToGroupedArticles(articles))
  }, [articles]);

  const [countryPages, setCountryPages] = useState([]);

  useEffect(() => {
    const temp = Object.keys(groupedArticles).map((countryName) => {
      return <CountryPage countryName={countryName} destinations={groupedArticles[countryName]}/>
    });
    setCountryPages(temp);
  }, [groupedArticles]);

  if(countryPages.length === 0) {
    return "loading..."
  }
  return <div className="container">
      {
        countryPages
      }
    </div>
}

export default Articles;