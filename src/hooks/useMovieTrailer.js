import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../store/slices/nowPlayingMoviesSlice";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        try {
            const res = await fetch(
                `${API_URL}/movie/${id}/videos?language=en-US`,
                API_OPTIONS
            );
            const data = await res.json();

            const filteredVideos = data?.results.filter(
                (video) => video.type === "Trailer"
            );
            const trailer = filteredVideos
                ? filteredVideos[0]?.key
                : data?.results[0]?.key;
            dispatch(addMovieTrailer(trailer));
        } catch (error) {
            console.error(error);
        } finally {
        }
    };
    useEffect(() => {
        getMovieTrailer();
    }, []);
    return;
};

export default useMovieTrailer;
