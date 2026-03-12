

import { useSearchParams } from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";


export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({ pg: "1" });
    const totalPages = useAppSelector(state => state.movieSlice.totalPages);

    const page = Number(searchParams.get("pg")) || 1;

    const changePage = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;

        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("pg", newPage.toString());
            return params;
        });
    };

    return (
        <div className="bg-gray-50 shadow-2xl flex items-center justify-center gap-4 py-8">
            <button
                disabled={page === 1}
                onClick={() => changePage(page - 1)}
                className={`
                    px-6 py-2.5 rounded-lg font-medium text-sm
                    transition-all duration-200 border border-gray-300
                    ${page === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-300 active:bg-gray-400 shadow-sm hover:shadow"
                }
                `}
            >
                Prev
            </button>

            <span className="text-sm font-medium text-gray-700 min-w-[3ch] text-center">
                {page}
            </span>

            <button
                disabled={page >= totalPages}
                onClick={() => changePage(page + 1)}
                className={`
                    px-6 py-2.5 rounded-lg font-medium text-sm
                    border border-gray-300
                    transition-all duration-200 shadow-sm
                    ${page >= totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-300 active:bg-gray-400 hover:shadow"
                }
                `}
            >
                Next
            </button>
        </div>
    );
};
