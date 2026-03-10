import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/useAppDispatch";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { genreSliceActions } from "../redux/slices/genreSlice/genreSlice";
import { GenreComponent } from "../components/GenreComponent";

export const GenresComponent = () => {
    const dispatch = useAppDispatch();
    const genres = useAppSelector(state => state.genreSlice.genres);
    const isLoading = useAppSelector(state => state.genreSlice.isLoading);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(genreSliceActions.loadGenres());
    }, []);

    const onGenreClick = (genreId: number) => {
        const params = new URLSearchParams(searchParams);

        params.set("genre", genreId.toString());
        params.set("pg", "1");
        params.delete("search");

        navigate({
            pathname: "/",
            search: params.toString()
        });
    };

    const clearGenre = () => {
        const params = new URLSearchParams(searchParams);

        params.delete("genre");
        params.delete("search");
        params.set("pg", "1");

        navigate({
            pathname: "/",
            search: params.toString()
        });
    };

    return (
        <GenreComponent
            genres={genres}
            isLoading={isLoading}
            onGenreClick={onGenreClick}
            onClear={clearGenre}
        />
    );
};
