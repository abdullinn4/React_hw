import Header from "../Components/Header.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import MoviesFromJSON from "../Components/MoviesFromJSON.tsx";
import SearchFunction from "../Components/SearchFunction.tsx";



function Search() {
    const [showAllRecommendations,setShowAllRecommendations] = useState(false);
    const [showAllOscar2021,setshowAllOscar2021] = useState(false);




    const recommendations = showAllRecommendations ? MoviesFromJSON('src/jsons/movies_will_watch.json') :MoviesFromJSON('src/jsons/movies_will_watch.json').slice(0,4);
    const oscarMovies = showAllOscar2021 ? MoviesFromJSON('src/jsons/oscarMovies.json') : MoviesFromJSON('src/jsons/oscarMovies.json').slice(0,4);

    const handleRecommendToggle = () =>{
        setShowAllRecommendations(!showAllRecommendations)
    }
    const handleOscarToggle = () => {
        setshowAllOscar2021(!showAllOscar2021)
    }


    return (
        <div>
            <Header/>
            <main>
                <div className="search_info">
                    <div>
                        <h1>Поиск</h1>
                    </div>
                    <SearchFunction/>
                    <div className="rec_oscr">
                        <div className="search_points">
                            <div className="search_points_words">
                                <h3>Рекомендации</h3>
                                <div className="all_word" onClick={handleRecommendToggle}>
                                    {showAllRecommendations ? 'Скрыть' : 'Все'}
                                </div>
                            </div>
                            <div className="collections_movies">
                                <div className="collections_movies_row">
                                    {recommendations.map((movie, index) => (
                                        <div className="movie_names" key={index}>
                                            <img src={movie.imageURL} alt={movie.title} />
                                            <Link to="/"><h4>{movie.title}</h4></Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="search_points">
                            <div className="search_points_words">
                                <h3>Оскар 2021</h3>
                                <div className="all_word" onClick={handleOscarToggle}>
                                    {showAllOscar2021 ? 'Скрыть' : 'Все'}
                                </div>
                            </div>
                            <div className="collections_movies">
                                <div className="collections_movies_row">
                                    {oscarMovies.map((movie, index) => (
                                        <div className="movie_names" key={index}>
                                            <img src={movie.imageURL} alt={movie.title} />
                                            <Link to="/"><h4>{movie.title}</h4></Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );

}

export default Search;