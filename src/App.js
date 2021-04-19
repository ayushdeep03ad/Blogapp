import React from "react";
import Header from "./myComponents/Header";
import { Blog } from "./myComponents/Blog";
import { Title } from "./myComponents/Title";
import { About } from "./myComponents/About";
import { Home } from "./myComponents/Home";
import BlogContent from "./myComponents/BlogContent";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const axios = require("axios");
function App() {
  const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [postsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response);
        setLoading(true);
        setPosts(response.data);
        setLoading(false);
      }, []);
  });

  const click = () => {
    console.log("you have clicked");
  };
  return (
    <>
      <Router>
        <Header title="My Blog" />
        <Title />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Blog posts={posts} loading={loading} click={click} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
