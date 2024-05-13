import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/slices/nowPlayingMoviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        try {
            const data = await fetch(
                `${API_URL}/movie/top_rated?&page=1`,
                API_OPTIONS
            );
            const json = await data.json();
            dispatch(addTopRatedMovies(json?.results));
        } catch (error) {
            console.error(error);
        } finally {
        }
    };
    useEffect(() => {
        getTopRatedMovies();
    }, []);
    return;
};

export default useTopRatedMovies;
