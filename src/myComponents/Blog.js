import React from 'react'
import { BlogItems } from "./BlogItems";
export const Blog = (props) => {
    let styles = {
        border:"1px solid black",
        height:"100vh",
        display:"relative",
        // displayDirection:"coloumn"
    };
    if (props.loading) {
    return <h2>Loading...</h2>;
  }
    console.log(props.res)
    return (
      <div className="container my-3" style={styles}>
        {props.posts.map((post)=>{
            return (
              <>
                <BlogItems
                  title={post.title}
                  id={post.id}
                  key={post.id}
                  onClick={props.click}
                />
              </>
            );
        })}
      </div>
    );
}