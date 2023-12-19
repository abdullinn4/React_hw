import {useEffect, useState} from "react";
import MoviesFromJSON from "./MoviesFromJSON.tsx";
import {Link} from "react-router-dom";

interface Movie {
    title: string;
    imageURL: string;
}
function SearchFunction(){
    const[searchQuery,setSearchQuery] = useState('');
    const[searchResults, setSearchResults] = useState<Movie[]>([]);

    const moviesData = MoviesFromJSON("src/jsons/movies_watched.json");

    useEffect(()=>{
        const searchMovies = () => {
            if (searchQuery) {
                const filteredMovies = moviesData.filter((movie) =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
                setSearchResults(filteredMovies);
            }else {
                setSearchResults([]);
            }
        };
        searchMovies();
    },[searchQuery, moviesData]);

    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    return (
        <div>
            <input
                className="searching_input"
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Введите название фильма, например «Титаник»"
            />
            <div>
                {searchResults.map((movie,index) => (
                    <div className="movie_names" key={index}>
                        <Link to="/"><h4>{movie.title}</h4></Link>
                        <img src={movie.imageURL} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default  SearchFunction;
