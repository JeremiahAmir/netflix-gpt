import { useSelector } from "react-redux";
import Videos from "./Videos";
import useMovieVideos from "../hooks/useMovieVideos";
import { useParams } from "react-router-dom";
const MovieVideos = () => {
    const { id } = useParams();
    const movieVideo = useSelector((store) => store.movies.movieVideos);
    useMovieVideos(id);
    if (!movieVideo) return;
    return (
        <>
            <div className="py-5 bg-black text-white w-full px-12 aspect-video">
                <div className="grid grid-cols-12">
                    {movieVideo.map((video) => {
                        return (
                            <Videos
                                key={video?.id}
                                id={video.id}
                                video_link={video?.key}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MovieVideos;
