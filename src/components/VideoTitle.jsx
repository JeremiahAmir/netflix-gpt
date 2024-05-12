import { NavLink } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
    return (
        <>
            <div className="w-screen aspect-video h-full pt-96 container px-12 mx-auto absolute text-white bg-gradient-to-r from-black">
                <h1 className="font-bold text-4xl mb-4">{title}</h1>
                <p className="text-xl w-2/4">{overview.slice(0, 200) + "..."}</p>
                <div className="flex mt-10">
                    <button className="bg-white text-black font-bold px-10 py-3 mr-5 rounded-sm">
                        ▶ Play
                    </button>
                    <NavLink
                        to={`/movie/${id}`}
                        className="bg-slate-400 bg-opacity-55 px-10 py-3  rounded-sm"
                    >
                        More Info
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default VideoTitle;
