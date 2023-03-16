import {
  createRoutesFromElements,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/home.js";
import Developer from "../pages/developer.js";
import Creator from "../pages/creator.js";
import Philosopher from "../pages/philosopher.js";

const AnimatedRoutes = () => {
  const location = useLocation();

  const routes = useRoutes(
    createRoutesFromElements(
      <Routes location={location} key={location.pathname}>
        <Route path="/" Component={Home} />
        <Route path="/developer" Component={Developer} />
        <Route path="/philosopher" Component={Philosopher} />
        <Route path="/creator" Component={Creator} />
      </Routes>
    )
  );

  return <AnimatePresence mode="wait">{routes}</AnimatePresence>;
};

export default AnimatedRoutes;
