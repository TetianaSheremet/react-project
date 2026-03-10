import type { IGenre } from "../models/IGenre";

interface Props {
    genres: IGenre[];
    isLoading: boolean;
    onGenreClick: (genreId: number) => void;
    onClear: () => void;
}

export const GenreComponent = ({
                                   genres,
                                   isLoading,
                                   onGenreClick,
                                   onClear,
                               }: Props) => {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        if (value === "all") {
            onClear();
        } else {
            const genreId = Number(value);
            if (!isNaN(genreId)) {
                onGenreClick(genreId);
            }
        }
    };

    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
            {/* Кнопка "All" окремо (як у тебе) */}
            <button
                onClick={onClear}
                className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 whitespace-nowrap"
            >
                All
            </button>

            {/* Випадаючий список жанрів */}
            <div className="relative w-full sm:w-64">
                {isLoading ? (
                    <div className="px-4 py-2.5 bg-gray-100 text-gray-500 rounded-lg border border-gray-300">
                        Завантаження...
                    </div>
                ) : (
                    <select
                        onChange={handleSelectChange}
                        defaultValue="" // або "all", якщо хочеш щоб за замовчуванням було "All"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       text-gray-900 cursor-pointer appearance-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: "right 0.75rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                        }}
                    >
                        <option value="" disabled>
                            Select genre..
                        </option>

                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>
        </div>
    );
};
