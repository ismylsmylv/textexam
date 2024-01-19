import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home.";
import Admin from "../pages/admin";
import Contact from "../pages/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/admin",
                element: <Admin />
            }, {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
]);

export default router