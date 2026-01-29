import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import type {IMovie} from "../models/IMovie.ts";
import {getAllMovies} from "../services/api.service.ts";


export const MoviesComponent = () => {


  const [movies, setMovies] =  useState<IMovie[]>([]);

  const [query] = useSearchParams();


  const pg= query.get('pg')

    useEffect(() => {
           getAllMovies(pg || '1').then(value => setMovies(value.results))
    }, [pg]);


    console.log(movies)
    return (
        <>


                {movies.map((movie) => (
                   <div>

                       <Link to={`/movie/${movie.id}`}>   {movie.id}</Link>



                   </div>
                ))}

        </>

    );
};
