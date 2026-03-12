import type {IMovie} from "../../../models/IMovie.ts";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, type PayloadAction,} from "@reduxjs/toolkit";
import {getAllMovies, getMovieById, getSearchedMovie} from "../../../services/api.service.ts";
import type {ISingleMovie} from "../../../models/ISingleMovie.ts";




type MovieSliceType ={
    movies: IMovie[],
    movie:ISingleMovie|null,
    searchResults: IMovie[],
    isLoading:boolean,
    totalPages: number
}
const initialState:MovieSliceType = {movies:[],movie:null,isLoading:false,searchResults:[],totalPages:1}

 //////////// /////////////////////////////////////////////////////////////////////////////////////////////////

export const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (
        { page, genreId }: { page: number; genreId?: number },
        thunkAPI
    ) => {
        try {
            const data = await getAllMovies(page, genreId);

            return data
        } catch (e) {
            return thunkAPI.rejectWithValue('Failed to load movies');
        }
    }
);

// ///////////////////////////////////////////////////////////////////////


export const loadMovie = createAsyncThunk('movieSlice/loadMovie',
    async(id:string,thunkAPI) => {


        try {
            const data = await getMovieById(id)

            return data
        }

        catch (e){
            return thunkAPI.rejectWithValue("Failed to load a single movie")
        }
    }
    )


export const searchMovies = createAsyncThunk('movieSlice/searchMovies',
    async ({query, page=1 } : {query:string, page?:number},thunkAPI ) =>{

    try{
        const data = await getSearchedMovie(query,page)
        return data
    }

    catch (e) {
        return thunkAPI.rejectWithValue("Failed to load searched movies")
    }
    }

    )





 /////////////////////////////////////////////////////////////

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState:initialState,
    reducers:{
    },
    extraReducers: builder =>{
        builder
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.searchResults = [];
            })

            .addCase(loadMovie.fulfilled,(state,action:PayloadAction<ISingleMovie>)=>{
                state.movie = action.payload
            })

            .addCase(searchMovies.fulfilled, (state, action) => {
                state.searchResults = action.payload.results;
                state.totalPages = action.payload.total_pages;
                state.movies = [];
            })

            .addMatcher(isFulfilled(loadMovie,loadMovies,searchMovies), (state)=>{
                state.isLoading = false
            })
            .addMatcher(isRejected(loadMovie,loadMovies,searchMovies), (state)=>{
                state.isLoading = false
            })
            .addMatcher(isPending(loadMovie,loadMovies,searchMovies), (state)=>{
                state.isLoading=true
            })
    }


})
 //////////////////////////////////////////////////

  export const movieSliceActions = {
      ...movieSlice.actions, loadMovies,loadMovie, searchMovies
  }
