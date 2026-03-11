import type {IMovie} from "../models/IMovie.ts";
import {GenreBadge} from "./GenreBadge.tsx";
import {StarsRating} from "./StarsRating.tsx";


interface MovieProps {
    movie: IMovie;
    genreNames: string[];
}

export const MovieInfo = ({ movie, genreNames }: MovieProps) => {
    return (
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
    );
};
