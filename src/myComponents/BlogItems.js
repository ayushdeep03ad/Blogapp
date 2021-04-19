import React from 'react'

export const BlogItems = (props) => {
   let styles={
       width: "18rem",

   }
   console.log(props);
    return (
      <div style={{ margin: "25px" }}>
        <div className="card " style={styles}>
          <div className="card-body">
            <h5 className="card-title">Id</h5>
            <p className="card-text">
                {props.title}

            </p>
          </div>
        </div>
      </div>
    );
}
