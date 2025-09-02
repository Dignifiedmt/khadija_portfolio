import React from "react";

const FormField = ({label, id, error, children}) => {
    return (
        <div>
            <label className="block text-sm font-semibold leading-6" htmlFor={id}>
                {label}
            </label>
            {children}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default FormField;
