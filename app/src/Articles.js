import * as React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryPage from "./CountryPage";
import "./App.css";

function Articles({articles, loadArticles}) {
  const [groupedArticles, setGroupedArticles] = useState({});
  const articlesToGroupedArticles = localArticles => {
    const localGroupedArticles = {};
    for(let i = 0; i < localArticles.length; i++) {
      const article = localArticles[i];
      if(localGroupedArticles[article.country] === undefined){
        localGroupedArticles[article.country] = [];
      }
      localGroupedArticles[article.country].push(article);
    }
    return localGroupedArticles;
  };
  
  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    setGroupedArticles(articlesToGroupedArticles(articles))
  }, [articles]);
  // console.log("articles", articles)
  console.log("grouped", groupedArticles);
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