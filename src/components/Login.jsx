import { useState } from "react";
import Header from "./Header";
const bannerImage =
    "https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/d010c7a2-d74a-4747-a9fb-9583b918e4a0/PK-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg";
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleToggle = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <>
            <Header />
            <div className="absolute bg-black bg-opacity-80 min-h-full w-full">
                <img src={bannerImage} className="w-full min-h-full" alt="" />
                <div className="absolute bg-black bg-opacity-55 w-full top-0 min-h-full"></div>
            </div>
            <div className="absolute bg-black bg-opacity-80 py-16 px-20 w-3/12 my-96 mx-auto left-0 right-0">
                <form>
                    <h2 className="text-4xl text-white mb-8">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </h2>
                    {!isSignIn && (
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-gray-700 bg-opacity-70 text-white rounded-lg"
                                placeholder="Full Name"
                                autoComplete="off"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-700 bg-opacity-70 text-white rounded-lg"
                            placeholder="Email or Phone Number"
                            autoComplete="off"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-700 bg-opacity-70 text-white rounded-lg"
                            placeholder="Password"
                            autoComplete="off"
                        />
                    </div>
                    <button className="w-full px-4 py-3 bg-red-700 text-white rounded-lg">
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
