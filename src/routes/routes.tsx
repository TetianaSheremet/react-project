import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {SingleMoviePage} from "../pages/SingleMoviePage.tsx";

export const routes = createBrowserRouter([{
    path:"/", element : <MainLayout/>,

        children :[
        {index: true, element : <MoviesPage/>},
            {path:"movie/:id", element:<SingleMoviePage/>}

    ]
}])

