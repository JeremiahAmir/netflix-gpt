import { IMG_URL_API } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
    return (
        <>
            <img className="w-48" src={IMG_URL_API + posterPath} alt={title} />
        </>
    );
};

export default MovieCard;
