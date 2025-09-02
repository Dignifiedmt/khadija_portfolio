import React, {createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return <ThemeContext.Provider value={{isDark, setIsDark}}>{children}</ThemeContext.Provider>;
};
