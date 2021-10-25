import React from "react";
import Movie from "./components/Movies";
import { MovieContextProvider } from "./MovieContext";
function App () {
  return(
    <MovieContextProvider> 
      <Movie />
    </MovieContextProvider>

  )
}


export default App;