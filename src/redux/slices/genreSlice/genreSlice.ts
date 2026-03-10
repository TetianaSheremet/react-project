import type { IGenre } from "../../../models/IGenre.ts";
import {
    createAsyncThunk,
    createSlice,
    isPending,
    isFulfilled,
    isRejected
} from "@reduxjs/toolkit";
import { getGenres } from "../../../services/api.service.ts";

type GenreSliceType = {
    genres: IGenre[],
    isLoading: boolean,
}

const initialState: GenreSliceType = {
    genres: [],
    isLoading: false
}

/////////////////////////////////////////////////////////////

export const loadGenres = createAsyncThunk(
    'genreSlice/loadGenres',
    async (_, thunkAPI) => {
        try {
            const data = await getGenres()
            return thunkAPI.fulfillWithValue(data.genres)
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to load genres")
        }
    }
)

/////////////////////////////////////////////////////////////

export const genreSlice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addMatcher(isPending(loadGenres), (state) => {
                state.isLoading = true
            })
            .addMatcher(isFulfilled(loadGenres), (state) => {
                state.isLoading = false
            })
            .addMatcher(isRejected(loadGenres), (state) => {
                state.isLoading = false
            })
    }
})

/////////////////////////////////////////////////////////////

export const genreSliceActions = {
    ...genreSlice.actions,
    loadGenres
}
