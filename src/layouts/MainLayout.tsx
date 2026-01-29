import {Outlet} from "react-router-dom";
import Header from "../pages/Header.tsx";

export const MainLayout = () => {
    return (
        <div>


            <Header/>
            <Outlet/>

        </div>
    );
};
