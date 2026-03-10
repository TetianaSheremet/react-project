import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { movieSliceActions } from "../redux/slices/movieSlice/movieSlice";
import { SingleMovieComponent } from "../components/SingleMovieComponent";

export const SingleMoviePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const movie = useAppSelector(state => state.movieSlice.movie);
    const isLoading = useAppSelector(state => state.movieSlice.isLoading);

    useEffect(() => {
        if (id) {
            dispatch(movieSliceActions.loadMovie(id));
        }
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (!movie) return null;

    return <SingleMovieComponent movie={movie} />;
};
