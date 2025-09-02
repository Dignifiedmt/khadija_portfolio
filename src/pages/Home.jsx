import React from "react";
import {motion} from "framer-motion";
import picture from "../assets/images/hero.png";
import SocialLinks from "../components/SocialLinks.jsx";
import SkillCategory from "../components/SkillCategory.jsx";
import Button from "../components/Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faBootstrap,
    faPhp,
    faNodeJs,
    faGitAlt,
    faGithub,
    faFigma,
    faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const TailwindIcon = () => (
    <svg
        className="h-12 w-12 text-teal-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 3h18v18H3V3zm3 3v12h12V6H6zm2 2h8v8H8V8zm2 2v4h4v-4h-4z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></path>
    </svg>
);

const CanvaIcon = () => (
    <svg
        className="h-12 w-12 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.37 .17a2.5 2.5 0 00-2.24 1.34L5.22 11.2a2.5 2.5 0 00-.01 2.6l4.91 9.68a2.5 2.5 0 002.24 1.34h0a2.5 2.5 0 002.24-1.34l4.91-9.68a2.5 2.5 0 00-.01-2.6L14.6.51a2.5 2.5 0 00-2.23-.34zM7.85 12.5h8.3M12 2v8.5m-4.15 6.5h8.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
        ></path>
    </svg>
);

const GoogleSuiteIcon = () => <FontAwesomeIcon icon={faMicrosoft} className="text-5xl text-yellow-400" />; // Approximation

const frontendSkills = [
    {icon: <FontAwesomeIcon icon={faHtml5} className="text-5xl text-orange-600" />, name: "HTML5"},
    {icon: <FontAwesomeIcon icon={faCss3Alt} className="text-5xl text-blue-600" />, name: "CSS3"},
    {icon: <FontAwesomeIcon icon={faJsSquare} className="text-5xl text-yellow-500" />, name: "JavaScript"},
    {icon: <FontAwesomeIcon icon={faReact} className="text-5xl text-cyan-400" />, name: "React"},
    {icon: <TailwindIcon />, name: "Tailwind CSS"},
    {icon: <FontAwesomeIcon icon={faBootstrap} className="text-5xl text-purple-600" />, name: "Bootstrap"},
];

const backendSkills = [
    {icon: <FontAwesomeIcon icon={faPhp} className="text-5xl text-indigo-400" />, name: "PHP"},
    {icon: <FontAwesomeIcon icon={faDatabase} className="text-5xl text-blue-800" />, name: "MySQL"},
    {icon: <FontAwesomeIcon icon={faNodeJs} className="text-5xl text-green-600" />, name: "Node.js"},
];

const productivitySkills = [
    {icon: <FontAwesomeIcon icon={faGitAlt} className="text-5xl text-red-600" />, name: "Git"},
    {icon: <FontAwesomeIcon icon={faGithub} className="text-5xl text-black" />, name: "GitHub"},
    {icon: <FontAwesomeIcon icon={faFigma} className="text-5xl text-purple-600" />, name: "Figma"},
    {icon: <CanvaIcon />, name: "Canva"},
    {icon: <FontAwesomeIcon icon={faMicrosoft} className="text-5xl text-blue-700" />, name: "Microsoft Office"},
    {icon: <GoogleSuiteIcon />, name: "Google Suite"},
];

const Home = () => {
    return (
        <>
            <section className="py-20 sm:py-24 bg-[var(--background-light)] animate-fadeIn" id="about">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        <div>
                            <h1 className="text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl">
                                Khadija Muhammad Tasiu
                            </h1>
                            <p className="mt-4 text-lg text-[var(--text-secondary)]">
                                Frontend Developer specializing in creating responsive and interactive web applications
                                using HTML5, CSS3, JavaScript, React, Tailwind CSS, and Git/GitHub.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <NavLink to="/projects">
                                    <Button variant="primary">View Projects</Button>
                                </NavLink>
                                {/* <NavLink to="/contact">
                                    <Button variant="secondary">Contact Me</Button>
                                </NavLink> */}
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1FEzaWgj7IP_w0bmv12hfCpuLPqqMhjr2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="secondary">Download Resume</Button>
                                </a>
                                <br></br>
                                <div className="flex gap-4">
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="aspect-square w-full max-w-sm mx-auto lg:max-w-none rounded-full bg-cover bg-center bg-no-repeat"
                            style={{backgroundImage: `url(${picture})`}}
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.3}}
                        ></motion.div>
                    </motion.div>
                </div>
            </section>
            <section className="py-20 sm:py-24 bg-[var(--background-light)] animate-fadeIn" id="skills">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
                    <p className="mt-4 text-center text-lg text-[var(--text-secondary)]">
                        Technologies and tools I'm proficient with, categorized for clarity.
                    </p>
                    <div className="mt-16 space-y-12">
                        <SkillCategory title="Frontend" skills={frontendSkills} />
                        <SkillCategory title="Backend" skills={backendSkills} />
                        <SkillCategory title="Productivity" skills={productivitySkills} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
