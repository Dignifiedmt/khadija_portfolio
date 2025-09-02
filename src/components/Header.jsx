import React, {useState, useContext} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun, faBars} from "@fortawesome/free-solid-svg-icons";
import {ThemeContext} from "../ThemeContext.jsx";
import Button from "./Button.jsx";

const Header = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <div className="container mx-auto max-w-[1200px] flex items-center justify-between px-6 py-4">
                <NavLink to="/" className="flex items-center gap-3 text-[var(--text-primary)]">
                    <svg
                        className="h-6 w-6 text-[var(--primary-color)]"
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                    <h2 className="text-xl font-bold tracking-tight">Khadija Muhammad Tasiu</h2>
                </NavLink>
                <nav
                    className={`${
                        isMobileOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row absolute md:relative top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:gap-8`}
                >
                    <NavLink
                        to="/"
                        className="text-sm font-medium hover:text-[var(--primary-color)] transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="text-sm font-medium hover:text-[var(--primary-color)] transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="text-sm font-medium hover:text-[var(--primary-color)] transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Contact
                    </NavLink>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1FEzaWgj7IP_w0bmv12hfCpuLPqqMhjr2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <Button variant="primary">Resume</Button>
                    </a>
                </nav>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                        aria-label="Toggle dark mode"
                    >
                        <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden"
                        aria-label="Toggle mobile menu"
                    >
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
