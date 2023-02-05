import {NavLink} from "react-router-dom";
import logo from "../assets/logo.png"
import Radio from "./ThemeSelector";
export default function Nav() {

    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

  return (
      <nav className="relative container mx-auto p-6">
          <ul className="flex items-center justify-between">
              <li className="mr-auto">
                  <h1>
                      <NavLink className="mx-auto bg-neutralBg text-onNeutralBg border-8 border-onNeutralBg p-2 max-w-lg" to="/">
                          <span className="fas fa-code pr-3" aria-hidden="true"></span>
                          <span >Saar Paz</span>
                      </NavLink>
                  </h1>
              </li>
              {
                [['Home', '/'],
                ['Developer', '/developer'],
                ['Philosopher', '/philosopher'],
                ['Creator', '/creator'],
                ].map(([title, url]) => (
                    <li key={title}>
                        <NavLink className="mx-1 " to={url} style={({isActive}) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            {title}
                        </NavLink>
                    </li>
                ))
              }
              {/*<li>*/}
              {/*    <a href="https://www.linkedin.com/in/jen4web/" target="_blank">*/}
              {/*        <span className="fab fa-linkedin" aria-hidden="true"></span>*/}
              {/*        <span className="sr-only">LinkedIn</span>*/}
              {/*    </a>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*    <a href="https://www.github.com/jen4web" target="_blank">*/}
              {/*        <span className="fab fa-github-square text-3xl color:var(--aqua)" aria-hidden="true"></span>*/}
              {/*        <span className="sr-only">Github</span>*/}
              {/*    </a>*/}
              {/*</li>*/}
              {/*<li><a href="https://www.dropbox.com/s/3z2hm5gu3v2lrfy/JenKramerCV.pdf?dl=0" target="_blank"*/}
              {/*       className="button">Resume</a></li>*/}
          </ul>
      </nav>

    //   <nav className="relative container mx-auto p-6">
    //       <div className="flex items-center justify-between">
    //           <div className="p-2">
    //               <img className="h-10 w-10" src={logo} alt="logo"/>
    //           </div>
    //           <div className="hidden md:flex">
    //           {
    //               [['Home', '/'],
    //               ['Philosopher', '/philosophy'],
    //               ['Creator', '/creative'],
    //               ].map(([title, url]) => (
    //                   <NavLink className="mx-1" to={url} style={({isActive}) =>
    //                   isActive ? activeStyle : undefined
    //                   }
    //                   >
    //                       {title}
    //                   </NavLink>
    //               ))
    //           }
    //          </div>
    //       </div>
    // </nav>
  )
}