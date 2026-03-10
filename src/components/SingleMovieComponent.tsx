import type { IMovie } from "../models/IMovie";

interface Props {
    movie: IMovie;
}

export const SingleMovieComponent = ({ movie }: Props) => {
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>ID: {movie.id}</p>
            {movie.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            )}
        </div>
    );
};
