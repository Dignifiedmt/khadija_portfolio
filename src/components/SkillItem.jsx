// src/components/SkillItem.jsx (unchanged)
import React from "react";

const SkillItem = ({icon, name}) => {
    return (
        <div className="flex flex-col items-center gap-2">
            {icon}
            <p className="font-semibold">{name}</p>
        </div>
    );
};

export default SkillItem;
