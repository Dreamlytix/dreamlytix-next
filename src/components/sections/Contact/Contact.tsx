'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the right age to join the courses?",
            answer: "Our courses are designed for children aged 6-16 years. We have different programs tailored for different age groups to ensure the best learning experience."
        },
        {
            question: "What do parents need to bring for the class?",
            answer: "Just bring enthusiasm! We provide all necessary materials including robotics kits, laptops, and learning resources. Students only need to bring their curiosity and creativity."
        },
        {
            question: "What is the class size and configuration?",
            answer: "We maintain small class sizes of 6-8 students per instructor to ensure personalized attention. Classes are configured in a collaborative workshop-style setup."
        }
    ];

    return (
        <section id="contact" className="relative py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Let's Connect
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-blue-900 max-w-3xl mx-auto leading-relaxed">
                        Ready to bring your dreams to life? Let's start a conversation about your next project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                            <div className="relative">
                                <motion.div
                                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </motion.div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Want to Know More?
                                </h3>
                                <p className="text-blue-100 text-lg leading-relaxed">
                                    Feel free to contact us to get any details or book a free lesson for your child!
                                    Our expert team is here to answer all your questions and help you get started on
                                    an amazing robotics learning journey.
                                </p>
                            </div>
                        </motion.div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                                <motion.span
                                    className="w-2 h-8 bg-blue-700 rounded-full mr-3"
                                    animate={{ scaleY: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                ></motion.span>
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            className="rounded-2xl overflow-hidden shadow-lg"
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <button
                                                onClick={() => toggleFaq(index)}
                                                className="w-full px-6 py-5 text-left bg-white hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between"
                                            >
                                                <span className="font-semibold text-blue-900 pr-4 text-lg">
                                                    {faq.question}
                                                </span>
                                                <motion.div
                                                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-blue-700"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </motion.div>
                                            </button>
                                            <AnimatePresence>
                                                {activeFaq === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 py-5 bg-blue-50">
                                                            <p className="text-blue-800 leading-relaxed text-base">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="sticky top-8">
                            <motion.div
                                className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative z-10">
                                    <AnimatePresence mode="wait">
                                        {isSubmitted ? (
                                            <motion.div
                                                key="success"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                className="text-center py-16"
                                            >
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                                    className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                                                >
                                                    <motion.svg
                                                        className="w-10 h-10 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.3 }}
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </motion.svg>
                                                </motion.div>
                                                <h3 className="text-3xl font-bold text-blue-900 mb-3">
                                                    Message Sent Successfully!
                                                </h3>
                                                <p className="text-blue-700 text-lg">
                                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                                </p>
                                            </motion.div>
                                        ) : (
                                            <motion.form
                                                key="form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                onSubmit={handleSubmit}
                                                className="space-y-6"
                                            >
                                                <div className="pb-4">
                                                    <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                                        Send us a Message
                                                    </h3>
                                                    <p className="text-blue-700 text-base">
                                                        Fill out the form below and we'll get back to you as soon as possible.
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                                        <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2">
                                                            Full Name <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-4 py-3 rounded-xl bg-blue-50 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all duration-200 outline-none"
                                                            placeholder="John Doe"
                                                        />
                                                    </motion.div>

                                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                                        <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2">
                                                            Email Address <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full px-4 py-3 rounded-xl bg-blue-50 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all duration-200 outline-none"
                                                            placeholder="john@example.com"
                                                        />
                                                    </motion.div>
                                                </div>

                                                <motion.div whileFocus={{ scale: 1.01 }}>
                                                    <label htmlFor="subject" className="block text-sm font-semibold text-blue-900 mb-2">
                                                        Subject <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl bg-blue-50 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all duration-200 outline-none"
                                                        placeholder="What would you like to discuss?"
                                                    />
                                                </motion.div>

                                                <motion.div whileFocus={{ scale: 1.01 }}>
                                                    <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-2">
                                                        Message <span className="text-red-500">*</span>
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                        rows={5}
                                                        className="w-full px-4 py-3 rounded-xl bg-blue-50 text-blue-900 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all duration-200 resize-none outline-none"
                                                        placeholder="Tell us more about your project or inquiry..."
                                                    />
                                                </motion.div>

                                                <div className="pt-2">
                                                    <motion.button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <motion.div
                                                                    animate={{ rotate: 360 }}
                                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                                    className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                                                                />
                                                                <span>Sending Message...</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                </svg>
                                                                <span>Send Message</span>
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </div>

                                                <p className="text-center text-sm text-blue-600 pt-2">
                                                    We typically respond within 24 hours
                                                </p>
                                            </motion.form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: '120px' }}>
                <svg
                    className="relative block w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C300,80 600,80 900,40 C1050,20 1150,50 1200,80 L1200,120 L0,120 Z"
                        className="fill-blue-900"
                    />
                </svg>
            </div>
        </section>
    );
}