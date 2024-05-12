import { useRef, useState } from "react";
import Header from "./Header";
import { ToastContainer, toast, Slide } from "react-toastify";
import { formValidation } from "../utils/formValidation";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { Avatar_URL, Banner_Image } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsSignIn(!isSignIn);
    };

    const handleButton = () => {
        const message = formValidation(
            email.current.value,
            password.current.value
        );
        toast(message, {
            theme: "dark",
            transition: Slide,
        });

        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                        photoURL: Avatar_URL,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    id: uid,
                                    email: email,
                                    name: displayName,
                                    photoURL: photoURL,
                                })
                            );
                            navigate("/browse");
                        })
                        .catch((error) => {
                            toast(error, {
                                theme: "dark",
                                transition: Slide,
                            });
                        });

                    toast("User Signed Up Successfully", {
                        theme: "dark",
                        transition: Slide,
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast(errorMessage, {
                        theme: "dark",
                        transition: Slide,
                    });
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast("User Signed In Successfully", {
                        theme: "dark",
                        transition: Slide,
                    });
                    navigate("/browse");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast(errorMessage, {
                        theme: "dark",
                        transition: Slide,
                    });
                });
        }
    };

    return (
        <>
            <Header />
            <div className="absolute bg-black bg-opacity-80 min-h-full w-full">
                <img src={Banner_Image} className="w-full min-h-full" alt="" />
                <div className="absolute bg-black bg-opacity-55 w-full top-0 min-h-full"></div>
            </div>
            <div className="absolute bg-black bg-opacity-80 py-16 px-20 w-3/12 my-96 mx-auto left-0 right-0">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-4xl text-white mb-8">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </h2>
                    {!isSignIn && (
                        <div className="mb-4">
                            <input
                                ref={name}
                                type="text"
                                className="w-full px-4 py-3 bg-gray-700 bg-opacity-70 text-white rounded-lg"
                                placeholder="Full Name"
                                autoComplete="off"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <input
                            ref={email}
                            type="email"
                            className="w-full px-4 py-3 bg-gray-700 bg-opacity-70 text-white rounded-lg"
                            placeholder="Email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            ref={password}
                            type="password"
                            className="w-full px-4 py-3 bg-gray-700 bg-opacity-70 text-white rounded-lg"
                            placeholder="Password"
                            autoComplete="off"
                        />
                    </div>
                    <ToastContainer />
                    <button
                        onClick={handleButton}
                        className="w-full px-4 py-3 bg-red-700 text-white rounded-lg"
                    >
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                </form>
                <p className="my-4 text-gray-400">
                    {isSignIn ? "New to Netflix?" : "Already have an account?"}
                    <span
                        onClick={handleToggle}
                        className="text-white px-2 cursor-pointer"
                    >
                        {isSignIn ? "Sign up now" : "Sign in now"}
                    </span>
                </p>
            </div>
        </>
    );
};

export default Login;
