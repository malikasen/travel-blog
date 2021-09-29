import * as React from "react";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import Articles from "./Articles";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import * as apiClient from "./apiClient";

const App = () => (
  <div className="container">
    <nav>
      <Link to="/">Home</Link> | <Link to="new-post">New Post</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </main>
  </div>
);

const Home = () => {
  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
    return setArticles(await apiClient.getArticles())
  }

  return (
    <>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h2>{process.env.REACT_APP_SUBTITLE}</h2>
      <Articles articles={articles} setArticles={setArticles} loadArticles={loadArticles}/>
      <Form loadArticles={loadArticles} />
    </>
  )
};
  
const NewPost = () => (
  <>
    {/* <Form /> */}
  </>
);

export default App;
