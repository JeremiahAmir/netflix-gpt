import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import nowPlayingMoviesReducer from "./slices/nowPlayingMoviesSlice";
import configReducer from "./slices/configSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: nowPlayingMoviesReducer,
        config: configReducer,
    },
});

export default appStore;
