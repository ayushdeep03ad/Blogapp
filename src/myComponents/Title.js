import React from 'react'

export const Title = () => {
    let myStyle = {
    //   border: "1px solid red",
      textAlign: "center",
      fontFamily: "Montserrat Subrayada",
      fontSize:"100px"
    };
    return (
        <div className="container my-3" style={myStyle} font-family='Montserrat Subrayada' sans-serif>
            <h1>Welcome to my Blog</h1>
        </div>
    )
}
