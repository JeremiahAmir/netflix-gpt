import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, Slide, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { LANGUAGE_SUPPORT } from "../utils/constants";
import lang from "../utils/langConstants";
import { setLang } from "../store/slices/configSlice";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast("You have been signed out successfully", {
                    theme: "dark",
                    transition: Slide,
                });
            })
            .catch((error) => {
                toast(error, {
                    theme: "dark",
                    transition: Slide,
                });
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        id: uid,
                        email: email,
                        name: displayName,
                        photoURL: photoURL,
                    })
                );
                // navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);
    const handleLangChange = (e) => {
        dispatch(setLang(e.target.value));
    };
    const getLang = useSelector((store) => store.config?.lang);
    return (
        <>
            <ToastContainer />
            <div className="header-2">
                <nav className=" py-2 md:py-4 fixed left-0 right-0 top-0 bg-gradient-to-b from-black z-10">
                    <div className="px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <Link to="/browse">
                                <img
                                    className="w-60"
                                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                                    alt="logo"
                                />
                            </Link>
                            <button
                                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                                id="navbar-toggle"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        {user && (
                            <div
                                className="hidden md:flex items-center flex-col md:flex-row md:ml-auto mt-3 md:mt-0 list-none"
                                id="navbar-collapse"
                            >
                                <li>
                                    <select
                                        className="px-3 py-1 mr-4 text-white bg-transparent border"
                                        onChange={handleLangChange}
                                    >
                                        {LANGUAGE_SUPPORT.map((language) => (
                                            <option
                                                className="text-black"
                                                key={language.identifier}
                                                value={language.identifier}
                                            >
                                                {language.name}
                                            </option>
                                        ))}
                                    </select>
                                </li>
                                <li>
                                    <Link
                                        to="/gpt-search"
                                        className="text-white mr-4"
                                    >
                                        {lang[getLang].gptSearch}
                                    </Link>
                                </li>

                                <li className="flex relative group">
                                    <a
                                        href="#anchor"
                                        rel="noreferrer"
                                        className="p-2 md:mx-2 text-white rounded flex items-center "
                                    >
                                        <img
                                            className="w-[50px] mr-3"
                                            s
                                            src={user.photoURL}
                                            alt=""
                                        />
                                        <span className="">
                                            {lang[getLang].welcomeBack},{" "}
                                            {user.name}
                                        </span>
                                    </a>
                                    <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>

                                    <ul className="absolute bg-white p-3 w-52 top-14 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                        <li className="text-sm hover:bg-slate-100 leading-8">
                                            <a
                                                href="#anchor"
                                                onClick={handleSignOut}
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;

// let toggleBtn = document.querySelector("#navbar-toggle");
// let collapse = document.querySelector("#navbar-collapse");

// toggleBtn.onclick = () => {
//   collapse.classList.toggle("hidden");
//   collapse.classList.toggle("flex");
// };
