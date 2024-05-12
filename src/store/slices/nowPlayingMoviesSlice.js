import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        singleMovie: null,
        movieVideos: null,
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
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addSingleMovie: (state, action) => {
            state.singleMovie = action.payload;
        },
        addMovieVideos: (state, action) => {
            state.movieVideos = action.payload;
        },
    },
});

export const {
    addNowPlayingMovies,
    addMovieTrailer,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
    addSingleMovie,
    addMovieVideos,
} = nowPlayingMoviesSlice.actions;

export default nowPlayingMoviesSlice.reducer;
