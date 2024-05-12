import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
    const movieDetails = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movieDetails) return;

    const { original_title, overview, id } = movieDetails[0];
    return (
        <>
            <VideoTitle title={original_title} overview={overview} id={id} />
            <VideoBackground id={id} />
        </>
    );
};

export default MainContainer;
