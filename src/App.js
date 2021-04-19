import React from 'react'
import Header from "./myComponents/Header";
import {Blog} from "./myComponents/Blog";
import {Title} from "./myComponents/Title";
import "./App.css"
import  { useState, useEffect } from "react";
import { BlogItems } from './myComponents/BlogItems';
const axios = require("axios");
function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [postsPerPage] = useState(10);

   useEffect(() =>{
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          console.log(response);
          setLoading(true);
          setPosts(response.data);
          setLoading(false);

        }, []);
   })
  return (
   <>
   <Header title="My Blog"/>
   <Title/>
   <Blog posts={posts} loading={loading}/>
   </>
  );
}

export default App;
