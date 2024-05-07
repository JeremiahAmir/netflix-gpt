import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
    const getTrailer = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(id);
    return (
        <>
            <div className="w-[99vw] aspect-video">
                <iframe
                    className="w-[99vw] aspect-video"
                    src={`https://www.youtube.com/embed/${getTrailer}?si=Zdn4RZWpvyX9-u9N&amp;controls=0&autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
        </>
    );
};

export default VideoBackground;
