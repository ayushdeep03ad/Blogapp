import React from 'react'
import { BlogItems } from "./BlogItems";
export const Blog = (props) => {
    let styles = {
        border:"1px solid black",
        height:"100vh"
    };
    console.log(props.res)
    return (
        <div className="container my-3" style={styles}>
            <BlogItems />
            
        </div>
    );
}

