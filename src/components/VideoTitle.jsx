const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className="w-screen aspect-video h-full pt-96 container px-12 mx-auto absolute text-white bg-gradient-to-r from-black">
                <h1 className="font-bold text-4xl mb-4">{title}</h1>
                <p className="text-xl w-1/3">{overview}</p>
                <div className="flex mt-10">
                    <button className="bg-white text-black font-bold px-10 py-3 mr-5 rounded-sm">
                        ▶ Play
                    </button>
                    <button className="bg-slate-400 bg-opacity-55 px-10 py-3  rounded-sm">
                        More Info
                    </button>
                </div>
            </div>
        </>
    );
};

export default VideoTitle;
