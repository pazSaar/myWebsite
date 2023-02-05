import {ThemeColors, themeColors as color, ThemeModes} from "../common/types";

interface ThemeSelectorProps {
    changeColor: (color: ThemeColors) => void
    selectedColor: ThemeColors
    changeMode: (mode: ThemeModes) => void
    selectedMode: ThemeModes
}

const bgStyle = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
    green: 'bg-green-600 hover:bg-green-500'
}

export default function ThemeSelector({changeColor, selectedColor, changeMode, selectedMode} : ThemeSelectorProps) {

    const handleModeSelectorClick = () => {
        changeMode(selectedMode === 'light' ? 'dark' : 'light');
    }

    return (
        <div className="absolute ml-0 mt-40">
            {color.map(currentColor => {
                const borderStyle = selectedColor === currentColor ? "border-4 border-black border-double" : null;
                return <span className={`block h-10 w-10 cursor-pointer ${bgStyle[currentColor]} ${borderStyle}`} key={currentColor} onClick={() => changeColor(currentColor)}></span>
            })}

            <span className="bg-onNeutralBg h-6 w-10 rounded-full relative inline-flex items-center" onClick={handleModeSelectorClick}>
            <span className={`h-4 w-4 bg-neutralBg rounded-full block ${selectedMode === 'light' ? "translate-x-1" : selectedMode === 'dark' ? "translate-x-5" : null}`}/>
            </span>
        </div>
    );
}