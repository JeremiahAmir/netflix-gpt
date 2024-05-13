import { useSelector } from "react-redux";
import { Banner_Image } from "../utils/constants";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
    const getLang = useSelector((store) => store.config?.lang);
    return (
        <>
            <div className="absolute bg-black bg-opacity-80 min-h-full w-full">
                <img src={Banner_Image} className="w-full min-h-full" alt="" />
                <div className="absolute bg-black bg-opacity-55 w-full top-0 min-h-full"></div>
            </div>
            <div className="absolute pt-[15%] pb-5text-white w-full px-12">
                <div className="w-1/3 mx-auto bg-black bg-opacity-90 py-6 px-6 rounded-lg">
                    <form className="flex">
                        <input
                            type="text"
                            name="search"
                            className="w-full px-3 py-3 mr-3"
                            placeholder={lang[getLang].searchPlaceholder}
                        />
                        <button className="w-1/3 px-3 py-3 bg-red-800 text-white ">
                            {lang[getLang].search}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default GptSearchBar;
