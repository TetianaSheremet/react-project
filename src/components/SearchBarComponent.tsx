// src/components/SearchBarComponent.tsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IFormProps {
    search: string;
}

export const SearchBar = () => {
    const { handleSubmit, register, reset } = useForm<IFormProps>();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const searchFromUrl = searchParams.get("search") || "";

    useEffect(() => {
        reset({ search: searchFromUrl });
    }, [searchFromUrl]);

    const customHandler = (formDataProps: IFormProps) => {
        const value = formDataProps.search.trim();
        const params = new URLSearchParams(searchParams);

        if (!value) {
            params.delete("search");
        } else {
            params.set("search", value);
        }

        params.set("pg", "1");
        params.delete("genre");

        navigate({
            pathname: "/",
            search: params.toString()
        });
    };

    return (
        <form onSubmit={handleSubmit(customHandler)} className="flex w-full items-center">
            <input
                type="text"
                placeholder="Search movies..."
                {...register("search")}
                className="flex-1 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-grey-500 focus:border-grey-500 shadow-sm"
            />
            <button
                type="submit"
                className="px-5 py-2 bg-gray-600 text-white rounded-r-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
            >
Search
            </button>
        </form>
    );
};
