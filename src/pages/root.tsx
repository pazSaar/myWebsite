import Nav from "../components/Nav.js";
import { Outlet } from "react-router-dom";
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
  document.body.classList.add(`theme-${themeColors[0]}`);
  document.body.classList.add(`theme-${themeModes[0]}`);

  const [color, setColor] = useState<ThemeColors>(themeColors[0]);
  const [mode, setMode] = useState<ThemeModes>(themeModes[0]);

  const handleChangeColor = (color: ThemeColors) => {
    switch (color) {
      case "red":
        document.body.classList.replace("theme-blue", "theme-red");
        document.body.classList.replace("theme-green", "theme-red");
        break;
      case "blue":
        document.body.classList.replace("theme-red", "theme-blue");
        document.body.classList.replace("theme-green", "theme-blue");
        break;
      case "green":
        document.body.classList.replace("theme-red", "theme-green");
        document.body.classList.replace("theme-blue", "theme-green");
        break;
    }

    setColor(color);
  };

  const handleChangeMode = (mode: ThemeModes) => {
    document.body.classList.replace(
      mode === "light" ? `theme-dark` : `theme-light`,
      mode === "light" ? `theme-light` : `theme-dark`
    );
    setMode(mode);
  };
  return (
    <div
      className={[
        "font-mono h-screen min-h-screen",
        color && `theme-${color}`,
        mode && modeClassName[mode],
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <ThemeSelector
        changeColor={handleChangeColor}
        selectedColor={color}
        changeMode={handleChangeMode}
        selectedMode={mode}
      />
      <Nav />
      <Outlet />
    </div>
  );
}
