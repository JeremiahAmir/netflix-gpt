import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import nowPlayingMoviesReducer from "./slices/nowPlayingMoviesSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: nowPlayingMoviesReducer,
    },
});

export default appStore;
