import {useEffect, useState} from "react";

interface Movie {
    title: string;
    imageURL: string;
}
function MoviesFromJSON(moviesFile:string){
    const[movies, setMovies] = useState<Movie[]>([])
    useEffect(() => {
        fetch(moviesFile)
            .then(response => response.json())
            .then(data => setMovies(data.movies))
    },[moviesFile])

    return movies;
}

export default MoviesFromJSON ;