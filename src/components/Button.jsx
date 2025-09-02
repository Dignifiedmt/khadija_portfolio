import React from "react";

const Button = ({children, className = "", variant = "primary", ...props}) => {
    const baseClasses = "flex items-center justify-center h-12 px-6 rounded-md font-bold transition-colors";
    const primaryClasses = "bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] text-white hover:bg-[--primary-color-hover]";
    const secondaryClasses =
        "bg-purple-50 text-[--primary-color] hover:bg-purple-100 dark:bg-gray-800 dark:hover:bg-gray-700";

    const variantClasses = variant === "primary" ? primaryClasses : secondaryClasses;

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
