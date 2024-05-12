import Header from "../components/Header";
import useMovieSingle from "../hooks/useMovieSingle";
import MovieDetails from "../components/MovieDetails";
import MovieVideos from "../components/MovieVideos";
const MovieSingle = () => {
    useMovieSingle();
    return (
        <>
            <Header />
            <MovieDetails />
            <MovieVideos />
        </>
    );
};

export default MovieSingle;
