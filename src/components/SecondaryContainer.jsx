import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    if (!movies) return;
    return (
        movies && (
            <>
                <div className="bg-black py-3">
                    <div className="-mt-80 relative text-white">
                        <MovieList
                            title="Trending Now"
                            movies={movies?.nowPlayingMovies}
                        />
                        <MovieList
                            title="Popular Movies"
                            movies={movies?.popularMovies}
                        />
                        <MovieList
                            title="Top Rated Movies"
                            movies={movies?.topRatedMovies}
                        />
                        <MovieList
                            title="Upcoming Movies"
                            movies={movies?.upcomingMovies}
                        />
                    </div>
                </div>
            </>
        )
    );
};

export default SecondaryContainer;
