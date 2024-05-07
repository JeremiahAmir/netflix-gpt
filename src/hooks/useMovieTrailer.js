import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../store/slices/nowPlayingMoviesSlice";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
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
    };
    useEffect(() => {
        getMovieTrailer();
    });
    return;
};

export default useMovieTrailer;
