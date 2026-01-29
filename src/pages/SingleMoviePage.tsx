import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IMovie} from "../models/IMovie.ts";
import {getMovieById} from "../services/api.service.ts";


export const SingleMoviePage = () => {


    const {id} = useParams();

    console.log(id)


    const [movie, setMovie] =  useState<IMovie>();

    useEffect(() => {
        getMovieById(id).then(value => setMovie(value))
    }, [id]);


    return (
        <> {movie && (
            <div>
                <h1>{movie.title}</h1>
                <p>ID: {movie.id}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
        )}
        </>
    );
};


