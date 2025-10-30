import React, {useEffect, useState} from "react";
import {WiMoonAltWaningCrescent4} from "react-icons/wi";


const Themetoggle = () => {
    const [theme, settheme] = useState(localStorage.getItem("theme"));
    const themetoggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        settheme(newTheme);
        // Dispatch a custom event so other components can react
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
    };
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <div className="nav_ac" onClick={themetoggle}>
            <WiMoonAltWaningCrescent4/>
        </div>
    );
};

export default Themetoggle;
