import * as React from "react";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import * as apiClient from "./apiClient";

function Form({loadArticles}) {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [country, setCountry] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgurl] = useState("");

  const addArticle = (newPost) => {
    return apiClient.addArticle(newPost).then(loadArticles);
  }

  const collectData = (e) => {
    e.preventDefault();
    const date = new Date();
    const newPost = {title: title, country: country, overview: overview, imageurl: imageurl, date: date, region: region, description: description, imgurl: imgurl};
    addArticle(newPost);
    // redirect to the new article
    setTitle("");
    setOverview("");
    setCountry("");
    setImageurl("");
    setDescription("");
    setRegion("");
    setImgurl("");
  }
  return (
    <div className="container">

      <h3>Create New Article</h3>
      <form className="form-horizontal" onSubmit={collectData}>
        <fieldset className="form-group row">
          <label for='title' className="col-sm-2 control-label">Article Title</label>
          <div class="col-sm-10">
            <input id='title' name='title' type='text' className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group row">
          <label for='country' className="col-sm-2 control-label">Country</label>
          <div class="col-sm-10">
            <input id='country' name='country' type='text' className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} required></input>
          </div>
        </fieldset>

        <fieldset className="form-group row">
          <label for='overview' className="col-sm-2 control-label">Country Overview</label>
          <div class="col-sm-10">
            <input id='overview' name='overview' type='text' className="form-control" value={overview} onChange={(e) => setOverview(e.target.value)} required></input>
          </div>
        </fieldset>

        <fieldset className="form-group row">
          <label for='imageurl' className="col-sm-2 control-label">General picture URL</label>
          <div class="col-sm-10">
            <input id='imageurl' name='imageurl' type='text' className="form-control" value={imageurl} onChange={(e) => setImageurl(e.target.value)}></input>
          </div>
        </fieldset>

        <fieldset className="form-group row">
          <label for='region' className="col-sm-2 control-label">Town/Region</label>
          <div class="col-sm-10">
            <input id='region' name='region' type='text' className="form-control" value={region} onChange={(e) => setRegion(e.target.value)} required></input>
          </div>
        </fieldset>

        <fieldset className="form-group row">
          <label for='description' className="col-sm-2 control-label">Description</label>
          <div class="col-sm-10">
            <input id='description' name='description' type='text' className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required></input>
          </div>
        </fieldset>

        <fieldset className="form-group row">
          <label for='imgurl' className="col-sm-2 control-label">Destination picture URL</label>
          <div class="col-sm-10">
            <input id='imgurl' name='imgurl' type='text' className="form-control" value={imgurl} onChange={(e) => setImgurl(e.target.value)}></input>
          </div>
        </fieldset>
        
        <div className="form-group row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4" >
            <input type='submit' className='button' value='Submit'></input>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>

    </div>
  );
}

export default Form;
