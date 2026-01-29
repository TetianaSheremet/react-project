import type {IMovieDiscoverResponse} from "../models/IMovieDiscoverResponse.ts";
import type  {IMovie} from "../models/IMovie.ts";
import type {IGenre} from "../models/IGenre.ts";

const TOKEN = import.meta.env.VITE_TOKEN as string;

const BaseUrl= 'https://api.themoviedb.org/3';

export const getAllMovies = async (pg:string):Promise<IMovieDiscoverResponse> => {

       return  await fetch(`${BaseUrl}/discover/movie?page=${pg}&sort_by=popularity.desc&include_adult=false&language=en-US`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    Accept: 'application/json',
                },
            }
        ).then(value => value.json());}


export const getMovieById = async (id:string|undefined):Promise<IMovie>=>{

    return await fetch(`${BaseUrl}/movie/${id}`,
    {
        method: 'GET',
            headers: {
        Authorization: `Bearer ${TOKEN}`,
            Accept: 'application/json',
    },
    },

        ).then(value => value.json());

}



export const getGenres = async ():Promise <{ genres: IGenre[] }>=>{

    return await fetch (`${BaseUrl}/genre/movie/list`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: "application/json",
        },
    }).then(res => res.json());
}



