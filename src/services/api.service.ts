import type {IMovieDiscoverResponse} from "../models/IMovieDiscoverResponse.ts";
import type {IGenre} from "../models/IGenre.ts";
import {BaseUrl, HEADERS} from "../constants/urls/urls.ts";
import type {ISingleMovie} from "../models/ISingleMovie.ts";



const getFromTMDB= async <T> (urlPart:string):Promise<T>=>{

    const response = await fetch(`${BaseUrl}${urlPart}`, { headers: HEADERS })

    if (!response.ok){
        throw new Error (`Failed to fetch movies (${response.status})`)
    }

    return  response.json()
}

export const getAllMovies = async (
    page: number =1,
    genreId?: number
): Promise<IMovieDiscoverResponse> => {


     let url = `page=${page}&sort_by=popularity.desc&include_adult=false&language=en-US`;

    if (genreId){
        url+= `&with_genres=${genreId}`
    }

    return getFromTMDB<IMovieDiscoverResponse>(`/discover/movie?${url}`)
};


export const getMovieById = async (id:string|undefined):Promise<ISingleMovie>=>{
    if (!id) {
        throw new Error("Movie id is required");
    }
        let url = `/movie/${id}`

    return getFromTMDB <ISingleMovie>(url)



}



export const getGenres = async ():Promise <{ genres: IGenre[] }>=>{

    const url = `/genre/movie/list`

    return getFromTMDB<{genres:IGenre[]}>(url)

}

export const getSearchedMovie = async (query:string,page:number=1):Promise<IMovieDiscoverResponse>=>{


    if (!query.trim()) {
        throw new Error("Search query is required");
    }
    const url = `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`

    return getFromTMDB<IMovieDiscoverResponse>(url)
}



