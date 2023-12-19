import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface Movie{
    title: string;
    imageURL: string;
}
function MoviesComponent({showOnlyTitles, moviesFile}:{showOnlyTitles:boolean, moviesFile: string}){
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(()=> {
        fetch(moviesFile)
            .then(response => response.json())
            .then(data => setMovies(data.movies));

    },[moviesFile]);

    const groupMovies = [];
    for (let i = 0; i <movies.length; i+=4){
        groupMovies.push(movies.slice(i, i + 4));
    }

    return (
        <div className="collections_movies">
            {groupMovies.map((movieGroup, index) => (
                <div className="collections_movies_row" key={index}>
                    {movieGroup.map((movie, movieIndex) => (
                        <div key={movieIndex}>
                            {showOnlyTitles ? (
                                <div className="movie_names">
                                    <Link to="/"><h4>{movie.title}</h4></Link>
                                </div>
                            ):(
                                <div className="movie_names">
                                    <img src={movie.imageURL} alt={movie.title} />
                                    <Link to="/"><h4>{movie.title}</h4></Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
export default MoviesComponent;