import {MoviesList} from "../components/MoviesList.tsx";
import {PaginationComponent} from "../components/pagination/PaginationComponent.tsx";

export const MoviesPage = () => {
    return (

        <>

            <MoviesList/>
            <PaginationComponent/>
        </>


    );
};
