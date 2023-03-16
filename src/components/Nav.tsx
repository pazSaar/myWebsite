import { NavLink } from "react-router-dom";
import { FaBars, SiProbot } from "react-icons/all";
import { useState } from "react";
export default function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          className="mx-auto bg-neutralBg text-onNeutralBg border-onNeutralBg border-2  sm:border-8 p-2 max-w-sm   "
          to="/"
        >
          <SiProbot className="inline-block" />{" "}
          <span className="align-bottom text-xs sm:text-sm">Saar Paz</span>
        </NavLink>
      </div>
      <div className="block sm:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-primary hover:border-primary "
          onClick={toggleLinks}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`flex w-full justify-center flex-wrap flex-grow  sm:flex sm:items-center sm:w-auto ${
          showLinks ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-wrap justify-between align-middle sm:flex-grow sm:justify-end">
          {[
            ["Home", "/"],
            ["Developer", "/developer"],
            ["Philosopher", "/philosopher"],
            ["Creator", "/creator"],
          ].map(([title, url]) => (
            <li key={title}>
              <NavLink
                className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-onPrimaryBg hover:underline hover:decoration-wavy mr-4"
                to={url}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    // return (
    //   <nav className="relative container mx-auto p-6">
    //     <ul className="flex items-center justify-between">
    //       <li className="mr-auto">
    //         <h1>
    //           <NavLink
    //             className="mx-auto bg-neutralBg text-onNeutralBg border-onNeutralBg border-2  sm:border-8 p-2 max-w-lg"
    //             to="/"
    //           >
    //             <SiProbot className="inline-block" />{" "}
    //             <span className="align-bottom text-xs sm:text-sm">Saar Paz</span>
    //           </NavLink>
    //         </h1>
    //       </li>
    //       {[
    //         ["Home", "/"],
    //         ["Developer", "/developer"],
    //         ["Philosopher", "/philosopher"],
    //         ["Creator", "/creator"],
    //       ].map(([title, url]) => (
    //         <li key={title}>
    //           <NavLink
    //             className="mx-1 "
    //             to={url}
    //             style={({ isActive }) => (isActive ? activeStyle : undefined)}
    //           >
    //             {title}
    //           </NavLink>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
  );
}
