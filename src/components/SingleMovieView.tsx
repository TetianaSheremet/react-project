

import type { ISingleMovie } from "../models/ISingleMovie";
import { StarsRating } from "./StarsRating";
import { GenreBadge } from "./GenreBadge";

interface Props {
    movie: ISingleMovie;
}

export const SingleMovieView = ({ movie }: Props) => {

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Poster";

    const backdropUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null;

    const releaseYear = movie.release_date?.split("-")[0] ?? "—";

    const formatRuntime = (minutes: number) => {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    };

    const formatMoney = (amount: number) => {
        return amount > 0 ? `$${amount.toLocaleString()}` : "—";
    };

    return (
        <div className="relative min-h-screen">


            {backdropUrl && (
                <div
                    className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backdropUrl})` }}
                >

                    <div className="absolute inset-0 backdrop-blur-sm bg-black/50" />
                </div>
            )}


            {!backdropUrl && (
                <div className="fixed inset-0 -z-10 bg-gray-700 opacity-65" />
            )}


            <div className="max-w-7xl mx-auto mt-30 px-4 py-10 flex flex-col md:flex-row gap-8">

                <img
                    src={posterUrl}
                    alt={movie.title}
                    className="w-100 rounded-lg shadow-2xl ring-1 ring-white/10 self-start"
                />

                <div className="flex flex-col gap-4">

                    <div>
                        <h1 className="text-3xl mb-1.5 font-bold text-white">{movie.title}</h1>

                        {movie.original_title !== movie.title && (
                            <p className="text-sm  text-white italic">
                                {movie.original_title}
                            </p>
                        )}

                        {movie.tagline && (
                            <p className="text-sm text-white">
                                "{movie.tagline}"
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <StarsRating rating={movie.vote_average} />
                        <span className="text-gray-100 mt-3 text-sm">
                            {movie.vote_average.toFixed(1)} / 10
                        </span>
                        <span className="text-gray-100 mt-3  text-sm">
                            ({movie.vote_count.toLocaleString()} votes)
                        </span>
                    </div>

                    {movie.genres.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {movie.genres.map((genre) => (
                                <GenreBadge key={genre.id} name={genre.name} />
                            ))}
                        </div>
                    )}

                    <div className="text-sm text-gray-300 space-y-1">
                        <p><strong className="text-white">Release:</strong> {releaseYear}</p>
                        <p><strong className="text-white">Runtime:</strong> {formatRuntime(movie.runtime)}</p>
                        <p><strong className="text-white">Status:</strong> {movie.status}</p>
                        <p><strong className="text-white">Budget:</strong> {formatMoney(movie.budget)}</p>
                        <p><strong className="text-white">Revenue:</strong> {formatMoney(movie.revenue)}</p>
                        <p><strong className="text-white">Language:</strong> {movie.original_language.toUpperCase()}</p>
                    </div>

                    {movie.overview && (
                        <p className="text-white leading-relaxed">
                            {movie.overview}
                        </p>
                    )}

                    {movie.production_companies.length > 0 && (
                        <div>
                            <p className="text-sm text-white mb-3">Production:</p>

                            <div className="flex flex-wrap gap-2">
                                {movie.production_companies.map((company) => (
                                    <span
                                        key={company.id}
                                        className="px-3 py-1 bg-white/10 text-white text-xs rounded-full backdrop-blur-sm"
                                    >
                                        {company.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {movie.belongs_to_collection && (
                        <p className="text-sm text-gray-400">
                            Part of{" "}
                            <span className="font-medium text-white">
                                {movie.belongs_to_collection.name}
                            </span>
                        </p>
                    )}

                </div>

            </div>
        </div>
    );
};
