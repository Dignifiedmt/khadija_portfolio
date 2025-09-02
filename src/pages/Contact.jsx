import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import FormField from "../components/FormField.jsx";
import Button from "../components/Button.jsx";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);
        const subject = encodeURIComponent(`Contact from ${data.name}`);
        const body = encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`);
        const mailtoUrl = `mailto:dignifieddev@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;

        toast.info("Opening your email client to send the message!");

        reset();
        setIsLoading(false);
    };

    return (
        <motion.section
            className="py-20 sm:py-24 bg-[var(--background-light)] animate-fadeIn"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-center text-lg text-[var(--text-secondary)]">
                    Feel free to reach out for collaborations or just a friendly chat.
                </p>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <FormField label="Name" id="name" error={errors.name?.message}>
                            <input
                                type="text"
                                id="name"
                                {...register("name", {required: "Name is required"})}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--text-primary)] shadow-sm ring-1 ring-inset ring-[var(--border-color)] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 dark:ring-[var(--border-color)]"
                                placeholder="Your Name"
                            />
                        </FormField>
                        <FormField label="Email" id="email" error={errors.email?.message}>
                            <input
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {value: /^\S+@\S+$/i, message: "Invalid email"},
                                })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--text-primary)] shadow-sm ring-1 ring-inset ring-[var(--border-color)] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 dark:ring-[var(--border-color)]"
                                placeholder="Your Email"
                            />
                        </FormField>
                        <div className="sm:col-span-2">
                            <FormField label="Message" id="message" error={errors.message?.message}>
                                <textarea
                                    id="message"
                                    rows="4"
                                    {...register("message", {required: "Message is required"})}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--text-primary)] shadow-sm ring-1 ring-inset ring-[var(--border-color)] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 dark:ring-[var(--border-color)]"
                                    placeholder="Your Message"
                                ></textarea>
                            </FormField>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
                            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin className="mr-2" /> : null}
                            <span>{isLoading ? "Opening..." : "Send Message"}</span>
                        </Button>
                    </div>
                </form>
            </div>
        </motion.section>
    );
};

export default Contact;
