import Nav from "../components/Nav.js";
import { Outlet } from "react-router-dom";
import Home from "./home";
import { useState } from "react";
import ThemeSelector from "../components/ThemeSelector";
import {
  ThemeColors,
  themeColors,
  ThemeModes,
  themeModes,
} from "../common/types";

const modeClassName = {
  dark: "theme-dark",
  light: "theme-light",
};

export default function Root() {
  const [color, setColor] = useState<ThemeColors>(themeColors[0]);
  const [mode, setMode] = useState<ThemeModes>(themeModes[0]);

  return (
    <div
      className={[
        "font-mono bg-primaryBg h-screen min-h-screen",
        color && `theme-${color}`,
        mode && modeClassName[mode],
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ThemeSelector
        changeColor={setColor}
        selectedColor={color}
        changeMode={setMode}
        selectedMode={mode}
      />
      <Nav />
      <Outlet />
    </div>
  );
}
