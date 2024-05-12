const Videos = ({ video_link }) => {
    return (
        <>
            <div className="col-span-4 mr-4">
                <iframe
                    className="w-full h-96"
                    src={`https://www.youtube.com/embed/${video_link}?si=Zdn4RZWpvyX9-u9N&amp;`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
        </>
    );
};

export default Videos;
