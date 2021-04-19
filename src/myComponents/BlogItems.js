import React from 'react'
import {BlogContent} from './BlogContent.js'
import { Link } from "react-router-dom";

export const BlogItems = (props) => {
   let styles={
       width: "18rem",

   }
  
    return (
      <div
        style={{ margin: "25px" }}
        onClick={() => {
          props.click();
        }}
      >
        <div className="card " style={styles}>
          <div className="card-body">
            <h5 className="card-title" fontfamily="Nunito Sans">
              {props.id}
            </h5>
            <Link
              className="nav-link active text-dark"
              aria-current="page"
              to="/BlogContent"
            >
              <p className="card-text">{props.title}</p>
            </Link>
          </div>
        </div>
      </div>
    );
}
