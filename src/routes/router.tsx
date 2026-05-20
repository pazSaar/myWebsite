import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Creator from "../pages/creator";
import Philosopher from "../pages/philosopher";
import Home from "../pages/home";
import Developer from "../pages/developer";
import Root from "../pages/root";
import Writer from "../pages/writer";
import ToMigrate from "../pages/subpages/toMigrate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route>
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
        {/* Nesting the story route explicitly under writer */}
        <Route path="writer">
          <Route index element={<Writer />} />
          <Route path="tomigrate" element={<ToMigrate />} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
