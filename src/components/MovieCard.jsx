import { Link } from "react-router-dom";
import { IMG_URL_API } from "../utils/constants";

const MovieCard = ({ posterPath, title, id }) => {
    return (
        <>
            <Link to={`/movie/${id}`}>
                <img
                    className="w-48"
                    src={IMG_URL_API + posterPath}
                    alt={title}
                />
            </Link>
        </>
    );
};

export default MovieCard;
