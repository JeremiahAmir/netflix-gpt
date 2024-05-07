import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <>
            <div className="mb-12 px-12">
                <h2 className="font-bold text-3xl mb-6">{title}</h2>

                <div className="flex overflow-x-scroll gap-x-5">
                    {movies?.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                posterPath={movie.poster_path}
                                title={movie.title}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MovieList;
