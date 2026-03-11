import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { movieSliceActions } from "../redux/slices/movieSlice/movieSlice";
import {MoviesListCard} from "./MoviesListCard.tsx";
import { Loader } from "./ui/Loader.tsx";



export const MoviesList = () => {
    const dispatch = useAppDispatch();

    const movies = useAppSelector(state => state.movieSlice.movies);
    const searchResults = useAppSelector(state => state.movieSlice.searchResults);
    const isLoading = useAppSelector(state => state.movieSlice.isLoading);
    const genres = useAppSelector(state => state.genreSlice.genres);

    const [query] = useSearchParams();

    const pg = Number(query.get("pg")) || 1;
    const genreId = query.get("genre") ? Number(query.get("genre")) : undefined;
    const searchParam = query.get("search");

    useEffect(() => {
        if (searchParam) {
            dispatch(movieSliceActions.searchMovies({ query: searchParam, page: pg }));
        } else {
            dispatch(movieSliceActions.loadMovies({ page: pg, genreId }));
        }
    }, [pg, genreId, searchParam, dispatch]);

    const moviesToShow = searchParam ? searchResults : movies;

    return (

        <div className="min-h-screen bg-[#e8e8e8] py-8">
            {isLoading && <Loader/>}

            {!isLoading && (

                <div className="container mx-auto px-4">
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
                        {moviesToShow.map(movie => (
                            <div key={movie.id} className="mb-6 break-inside-avoid">
                                <MoviesListCard movie={movie} genres={genres} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
