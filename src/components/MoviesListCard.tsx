
import { Link } from "react-router-dom";
import type { IMovie } from "../models/IMovie";
import { PosterPreview } from "./PosterPreview";
import { MovieInfo } from "./MovieInfo";

interface MovieProps {
    movie: IMovie;
    genres: { id: number; name: string }[];
}

export const MoviesListCard = ({ movie, genres }: MovieProps) => {
    const genreNames = movie.genre_ids
        .map(id => genres.find(g => g.id === id)?.name)
        .filter(Boolean) as string[];

    return (
        <Link
            to={`/movie/${movie.id}`}
            className="no-underline text-inherit block hover:scale-[1.02] transition-transform duration-200"
        >
            <div className="bg-white rounded-md overflow-hidden shadow-sm h-full flex flex-col">
                <PosterPreview
                    posterPath={movie.poster_path}
                    title={movie.title}
                />
                <MovieInfo movie={movie} genreNames={genreNames} />
            </div>
        </Link>
    );
};
