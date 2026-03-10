import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice/movieSlice.ts";
import {genreSlice} from "./slices/genreSlice/genreSlice.ts";

export const store=configureStore({
    reducer:{
        movieSlice:movieSlice.reducer,
        genreSlice:genreSlice.reducer


    }
})
