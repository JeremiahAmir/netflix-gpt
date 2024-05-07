import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, Slide, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
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
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);
    return (
        <>
            <ToastContainer />
            <div className="header-2">
                <nav className=" py-2 md:py-4 fixed left-0 right-0 top-0 bg-gradient-to-b from-black z-10">
                    <div className="px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <img
                                className="w-60"
                                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                                alt="logo"
                            />
                            <button
                                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                                id="navbar-toggle"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>

                        <div
                            className="hidden md:flex items-center flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                            id="navbar-collapse"
                        >
                            {user && (
                                <>
                                    <a
                                        href="#anchor"
                                        rel="noreferrer"
                                        className="p-2 lg:px-4 md:mx-2 text-white rounded flex items-center "
                                    >
                                        <img
                                            className="w-[50px] mr-3"
                                            src={user.photoURL}
                                            alt=""
                                        />
                                        <span className=" mr-3">
                                            Welcome, {user.name}
                                        </span>
                                    </a>

                                    <button
                                        onClick={handleSignOut}
                                        href="#anchor"
                                        rel="noreferrer"
                                        className="p-2 lg:px-4 md:mx-2  text-white rounded"
                                    >
                                        Sign out
                                    </button>
                                </>
                            )}
                        </div>
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
