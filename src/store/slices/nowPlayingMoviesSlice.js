import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
    },
});

export const {
    addNowPlayingMovies,
    addMovieTrailer,
    addPopularMovies,
    addTopRatedMovies,
} = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;
