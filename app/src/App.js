import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import Tasks from "./Tasks";

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link> | <Link to="new-post">New Post</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </main>
  </>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Tasks />
  </>
);

const NewPost = () => (
  <>
    <Form />
  </>
);

export default App;
