import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../store/slices/nowPlayingMoviesSlice";

const useMovieVideos = (id) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        try {
            const data = await fetch(
                `${API_URL}/movie/${id}/videos?language=en-US`,
                API_OPTIONS
            );
            const json = await data.json();
            dispatch(addMovieVideos(json?.results));
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getMovieVideos();
    }, []);
    return;
};

export default useMovieVideos;
