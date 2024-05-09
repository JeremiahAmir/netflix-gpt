import Header from "../components/Header";
import useMovieSingle from "../hooks/useMovieSingle";
import MovieDetails from "../components/MovieDetails";
const MovieSingle = () => {
    useMovieSingle();
    return (
        <>
            <Header />
            <MovieDetails />
        </>
    );
};

export default MovieSingle;
