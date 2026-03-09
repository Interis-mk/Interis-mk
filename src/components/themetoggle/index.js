import React, {useEffect, useState} from "react";
import {WiMoonAltWaningCrescent4} from "react-icons/wi";


const Themetoggle = () => {
    // Initialize theme from localStorage or system preference
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        // Check system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [theme, settheme] = useState(getInitialTheme());

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
