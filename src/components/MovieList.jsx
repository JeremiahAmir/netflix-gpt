import MovieCard from "./MovieCard";

import React from "react";
import Slider from "react-slick";

const MovieList = ({ title, movies }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="mb-12 px-12">
                <h2 className="font-bold text-3xl mb-6">{title}</h2>
                <Slider {...settings}>
                    {movies?.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                posterPath={movie.poster_path}
                                title={movie.title}
                            />
                        );
                    })}
                </Slider>
            </div>
        </>
    );
};

export default MovieList;
