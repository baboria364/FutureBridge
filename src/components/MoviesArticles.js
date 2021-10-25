import React from "react";


function MovieArcticle ( {data}) {
    
    return (
        <>
            <div className ="container">
                <div className = "movie-content">
                    <h1 className="movie__tittle">{data.title}</h1> 
                    <span><img className ="movie__url" src = {data.coverImage} alt="img" /></span> <br />
                    <p className="movie__desc">Description: {data.content}</p>
                    <span className="movie__pub">Posted on: {data.dateCreated}</span>

                </div>
            </div>
        </>
    )
}
export default MovieArcticle;