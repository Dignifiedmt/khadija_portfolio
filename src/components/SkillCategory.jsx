import React from "react";
import {motion} from "framer-motion";
import SkillItem from "./SkillItem.jsx";

const SkillCategory = ({title, skills}) => {
    return (
        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <SkillItem key={index} icon={skill.icon} name={skill.name} />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCategory;
