import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ]);

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
        } else {
            dispatch(removeUser());
        }
    });

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
};

export default Body;
