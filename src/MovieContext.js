import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';


export const MovieContext = createContext();
export const MovieContextProvider = (props) => {
    const[data, setData] = useState();
    useEffect( () => {
        axios
        // .get("https://api.themoviedb.org/3/movie/550?api_key=fedf59d403e1289cdf016694c2eab73a")
        .get('https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/posts/')
       
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));

    },[]);

    return (
        <MovieContext.Provider value = {{ data }}>
            {props.children}
        </MovieContext.Provider>
    );
};
