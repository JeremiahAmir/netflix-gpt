import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Browse from "../pages/Browse";
import Body from "../components/Body";

const Routes = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/browse",
                    element: <Browse />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
};

export default Routes;
