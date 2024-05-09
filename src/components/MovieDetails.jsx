import { useSelector } from "react-redux";
import { IMG_URL_API } from "../utils/constants";
import { NavLink } from "react-router-dom";

const MovieDetails = () => {
    const movieDetial = useSelector((store) => store.movies?.singleMovie);
    if (!movieDetial) return;

    const {
        original_title,
        poster_path,
        overview,
        genres,
        tagline,
        production_companies,
    } = movieDetial;
    return (
        <>
            <div className="pt-[10%] bg-black text-white w-full px-12 aspect-video">
                <div className="grid grid-cols-12">
                    <div className="col-span-3 mr-6">
                        <img
                            className="w-full"
                            src={IMG_URL_API + poster_path}
                            alt=""
                        />
                    </div>
                    <div className="col-span-5">
                        <h1 className="text-3xl mb-3">{original_title}</h1>
                        <p className="text-2xl mb-5">{tagline}</p>
                        <p className="mb-5">{overview}</p>
                        {production_companies && (
                            <>
                                <p className="text-xl mb-2">Produced By:</p>
                                <ul className="list-disc pl-6 mb-5">
                                    {production_companies.map((company) => (
                                        <li key={company.id}>{company.name}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {genres && (
                            <>
                                <p className="text-xl mb-2">Genre:</p>
                                <ul className="list-disc pl-6 mb-5">
                                    {genres.map((genre) => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <NavLink
                            className="px-6 py-2 rounded-sm bg-red-700 hover:bg-red-900 transition-all cursor-pointer inline-block"
                            to={"/browse"}
                        >
                            Back
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
