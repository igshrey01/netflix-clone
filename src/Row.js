import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title = "Title", fetchURL, isLargeRow =false}) {
const [movies, setMovies] = useState([]);

useEffect(() => {
    async function fetchData() {
    const request = await axios.get(fetchURL);
    setMovies(request.data.results);
    return request;
    }
    fetchData();
}, [fetchURL]);
console.log(movies)
return (
    <div className="row">
    <h1 className="title">{title}</h1>
    <div className="row__posters">
    {movies.map((movie) => (
        <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
            src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
        />
        ))}
    </div>
    </div>
);
}

export default Row;
