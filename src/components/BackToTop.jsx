import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 bg-[var(--primary-color)] text-white p-3 rounded-full shadow-md transition-all ${
                visible ? "opacity-100 visible" : "opacity-0 invisible"
            } hover:bg-[var(--primary-color-hover)]`}
            aria-label="Back to top"
        >
            <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" />
        </button>
    );
};

export default BackToTop;
