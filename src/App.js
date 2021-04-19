import React from 'react'
import Header from "./myComponents/Header";
import {Blog} from "./myComponents/Blog";
import {Title} from "./myComponents/Title";
import "./App.css"
import  { useState, useEffect } from "react";
const axios = require("axios");
function App() {
  const [blog,setBlog]=useState()
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      // handle success
      console.log(response);
     setBlog(response)
    });
  return (
   <>
   <Header title="My Blog"/>
   <Title/>
   <Blog res={blog}/>
   </>
  );
}

export default App;
