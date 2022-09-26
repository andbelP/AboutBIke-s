import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import FirstBike from "./components/routes/FirstBike";
import './css/style.css';
import Main from "./components/main";
import ErrorPage from "./components/errorPage/errorPage";
import HomePage from "./components/routes/homePage";
import Menu from "./components/routes/Menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [

            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <HomePage /> },
                    {
                        path: "FirstBike",
                        element: <FirstBike />,

                    },
                    {
                        path: "Menu",
                        element: <Menu/>,

                    },

                ],
            },
        ],

    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

