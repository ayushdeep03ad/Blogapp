import React from 'react'

export const BlogItems = () => {
   let styles={
       width: "18rem"
   }
    return (
      <div style={{ margin: "25px" }}>
        <div className="card" style={styles}>
          <div className="card-body">
            <h5 className="card-title">Id</h5>
            <p className="card-text">
              sunt aut facere repellat provident occaecati excepturi optio
              reprehenderit
            </p>
          </div>
        </div>
      </div>
    );
}
