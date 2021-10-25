import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";
import MovieArcticle from "./MoviesArticles"
function Movie(props) {
    const { data } = useContext(MovieContext)
    console.log(data);

    return (
        <div >
            <h1 className="head__text">BLOGS</h1>
            <div className="all__movies">
                {data
                    ? data.map((movie) => (
                        <MovieArcticle data={movie} key={movie.url} />
                    ))
                    : <h4>Loading....</h4>
                }
            </div>
        </div>
    );
}

export default Movie;