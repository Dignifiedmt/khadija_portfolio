import React from "react";
import {motion} from "framer-motion";

const ProjectCard = ({title, description, tags, liveUrl, githubUrl, previewUrl}) => {
    return (
        <motion.div
            className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 transition-transform duration-300 hover:scale-105 hover:shadow-purple-200"
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 20}}
            transition={{duration: 0.5}}
        >
            <div className="aspect-video relative overflow-hidden">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={previewUrl}
                    loading="lazy"
                    title={`${title} Preview`}
                ></iframe>
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-[var(--text-secondary)]">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-6 flex gap-4">
                    <a
                        className="text-sm font-medium text-[var(--primary-color)] hover:underline"
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                    <a
                        className="text-sm font-medium text-[var(--primary-color)] hover:underline"
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
