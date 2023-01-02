import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

//15e383204c1b8a09dbfaaa4c01ed7e17
const Api_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1';
const movie1 = {
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 6226.777,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "Title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 2932
    }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (original_title) => {
        const response = await (fetch(`${Api_URL}&s=${original_title}`));
        const data = await response.json();
        setMovies(data.Search);
        console.log('Madhavi1', data);
    }
    useEffect(() => {
        searchMovies('Avatar: The Way of Water');
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.searchTerm)}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {console.log('madhavi',movie1)}
            {console.log('madhavi23', movies)}
            {
                movies?.length >0
                ?(
                    <div className="container">
                   {movies.map((movie) => 
                   <MovieCard movie={movie} />
                   )}
            </div>
                ) : (
                    <div className="empty">
                        <h3> no movies found</h3>
                        </div>
                )

            }
            
        </div>

    );
}
export default App;