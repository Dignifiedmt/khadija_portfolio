import React from "react";
import SocialLinks from "./SocialLinks.jsx";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--background-light)]">
            <div className="container mx-auto px-6 py-12">
                <div className="flex justify-center gap-6">
                    <SocialLinks />
                </div>
                <p className="mt-8 text-center text-sm text-[var(--text-secondary)]">
                    © {currentYear} Khadija Muhammad Tasiu. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
