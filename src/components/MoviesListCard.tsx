import { Link } from "react-router-dom";
import type { IMovie } from "../models/IMovie";
import { PosterPreview } from "./PosterPreview";
import { StarsRating } from "./StarsRating";
import { GenreBadge } from "./GenreBadge";

interface Props {
    movie: IMovie;
    genres: { id: number; name: string }[];
}

export const MoviesListCard = ({ movie, genres }: Props) => {
    const genreNames = movie.genre_ids
        .map(id => genres.find(g => g.id === id)?.name)
        .filter(Boolean) as string[];

    return (
        <Link
            to={`/movie/${movie.id}`}
            className="no-underline text-inherit block hover:scale-[1.02] transition-transform duration-200"
        >
            <div className="bg-white rounded-md overflow-hidden shadow-sm  h-full flex flex-col">

                <PosterPreview
                    posterPath={movie.poster_path}
                    title={movie.title}
                />

                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="m-0 mb-2 text-lg font-bold leading-tight">
                        {movie.title}
                    </h3>




                    <p className="text-sm opacity-70 mt-3 leading-relaxed">
                        {movie.overview || "No description available"}
                    </p>

                    <div className="flex gap-1.5 flex-wrap mt-auto pt-4">
                        {genreNames.map(name => (
                            <GenreBadge key={name} name={name} />
                        ))}

                    </div>
                    <StarsRating rating={movie.vote_average} />
                </div>

            </div>

        </Link>
    );
};


