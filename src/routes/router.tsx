import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Creator from '../pages/creator';
import Philosopher from "../pages/philosopher";
import Home from "../pages/home";
import Developer from "../pages/developer";
import Root from "../pages/root";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
        >
            <Route >
                <Route index element={<Home />} />
                <Route
                    path="developer"
                    element={<Developer />}
                    // loader={contactLoader}
                    // action={editAction}
                />
                <Route
                    path="philosopher"
                    element={<Philosopher />}
                    // loader={contactLoader}
                />
                <Route
                    path="creator"
                    element={<Creator />}
                    // loader={contactLoader}
                    // action={editAction}
                />
            </Route>
        </Route>
    )
)

export default router;
