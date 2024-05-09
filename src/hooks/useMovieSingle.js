import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSingleMovie } from "../store/slices/nowPlayingMoviesSlice";

const useMovieSingle = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const getMovieSingle = async () => {
        try {
            const data = await fetch(`${API_URL}/movie/${id}`, API_OPTIONS);
            const json = await data.json();
            dispatch(addSingleMovie(json));
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    useEffect(() => {
        getMovieSingle();
    }, []);
    return;
};

export default useMovieSingle;
