import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "../pages/Browse";
import MovieSingle from "../pages/MovieSingle";
import GptSearch from "../pages/GptSearch";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/movie/:id",
            element: <MovieSingle />,
        },
        {
            path: "/gpt-search",
            element: <GptSearch />,
        },
    ]);

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
};

export default Body;
