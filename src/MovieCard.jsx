import React from 'react';

const MovieCard = ({movie}) => {
    console.log('test', movie.original_title);
    return (
        <div className="movie1">
            <div>
                <p>{movie.overview}</p>
            </div>
            <div>
                <img src={movie.poster_path !== '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' ? movie.poster_path : 'https://via.placeholder.com/400'}
                    alt={movie.original_title} ></img>
            </div>
            <div>
                <span>{movie.overview}</span>
                <h3>{movie.original_title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;
