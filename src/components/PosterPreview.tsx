interface PosterProps {
    posterPath: string | null;
    title: string;
}

export const PosterPreview = ({ posterPath, title }: PosterProps) => {
    const imageUrl = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : "https://via.placeholder.com/500x750/e5e5e5/999999?text=No+Poster";

    return (
        <div className="relative w-full overflow-hidden ">
            <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="w-full h-auto object-cover"
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        </div>
    );
};
