

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { movieSliceActions } from "../redux/slices/movieSlice/movieSlice";
import {SingleMovieView} from "./SingleMovieView.tsx";
import {Loader} from "./ui/Loader.tsx";

export const SingleMovieComponent = () => {


    const { id } = useParams();
    const dispatch = useAppDispatch();

    const movie = useAppSelector(state => state.movieSlice.movie);
    const isLoading = useAppSelector(state => state.movieSlice.isLoading);

    useEffect(() => {
        if (id) {
            dispatch(movieSliceActions.loadMovie(id));
        }
    }, [id, dispatch]);

    if (isLoading) return <Loader/>;

    if (!movie) return null;

    return <SingleMovieView movie={movie} />;

};
