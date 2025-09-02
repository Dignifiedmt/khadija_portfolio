// src/pages/Projects.jsx (unchanged)
import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projectsData = [
    {
        title: "Dignity AI",
        description: "An innovative AI-powered application focused on promoting dignity through technology.",
        tags: ["HTML", "Tailwind CSS", "JavaScript"],
        liveUrl: "https://dignifiedmt.github.io/dignity-ai/",
        githubUrl: "https://github.com/Dignifiedmt/dignity-ai",
        previewUrl: "https://dignifiedmt.github.io/dignity-ai/",
    },
    {
        title: "Crypto Tracker",
        description: "A real-time cryptocurrency tracking application with live data and charts.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://dignifiedmt.github.io/crypto_tracker/",
        githubUrl: "https://github.com/Dignifiedmt/crypto_tracker",
        previewUrl: "https://dignifiedmt.github.io/crypto_tracker/",
    },
    {
        title: "Hope For All",
        description: "A platform dedicated to spreading hope and providing support resources.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://dignifiedmt.github.io/hope_for_all/",
        githubUrl: "https://github.com/Dignifiedmt/hope_for_all",
        previewUrl: "https://dignifiedmt.github.io/hope_for_all/",
    },
    {
        title: "Calculator",
        description: "An advanced calculator app with scientific functions and responsive design.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://dignifiedmt.github.io/calculator/",
        githubUrl: "https://github.com/Dignifiedmt/calculator",
        previewUrl: "https://dignifiedmt.github.io/calculator/",
    },
    {
        title: "Modern Biz",
        description: "A modern business website template with sleek design and interactive features.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://dignifiedmt.github.io/modern-biz/",
        githubUrl: "https://github.com/Dignifiedmt/modern-biz",
        previewUrl: "https://dignifiedmt.github.io/modern-biz/",
    },
    {
        title: "First Quiz",
        description: "An interactive quiz application for learning and fun with score tracking.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://dignifiedmt.github.io/first_quiz/",
        githubUrl: "https://github.com/Dignifiedmt/first_quiz",
        previewUrl: "https://dignifiedmt.github.io/first_quiz/",
    },
];

const Projects = () => {
    return (
        <section className="py-20 sm:py-24 bg-[var(--background-light)] animate-fadeIn">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
                <p className="mt-4 text-center text-lg text-[var(--text-secondary)]">A selection of my recent work.</p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
