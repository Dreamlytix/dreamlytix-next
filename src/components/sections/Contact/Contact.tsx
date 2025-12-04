'use client';
import React, { useState } from 'react';

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
            question: "What services does Dreamlytix offer?",
            answer:
                "Dreamlytix provides end-to-end IT services including website development, portfolio and blog creation, e-commerce solutions, customer service systems, and custom fintech platforms. We build everything from simple static sites to full-scale enterprise applications."
        },
        {
            question: "How long does it take to build a website?",
            answer:
                "The timeline depends on the project complexity. A basic portfolio website may take 5–10 days, while e-commerce or fintech platforms can take 3–8 weeks. We provide a detailed timeline after understanding your exact requirements."
        },
        {
            question: "Do you offer custom designs or use templates?",
            answer:
                "We specialize in fully customized UI/UX designs tailored to your brand. However, if a client prefers a faster and more budget-friendly option, we also provide high-quality template-based solutions."
        },
        {
            question: "Will my website be mobile-friendly and SEO-optimized?",
            answer:
                "Yes! All Dreamlytix websites are mobile-responsive, SEO-friendly, and optimized for speed, performance, and user experience across all devices."
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer:
                "Absolutely. We offer various support and maintenance packages including updates, bug fixes, performance optimization, and content changes to ensure your website continues running smoothly."
        },
        {
            question: "Can Dreamlytix help with branding and content creation?",
            answer:
                "Yes. Along with development, we assist with logo creation, brand identity, copywriting, and content strategy to ensure your business presents a strong and consistent digital presence."
        },
        {
            question: "What is your pricing structure?",
            answer:
                "Our pricing depends on project scope and complexity. We offer flexible plans from affordable static websites to advanced custom applications. After a quick discussion, we share a transparent quotation with no hidden charges."
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4 pb-32 bg-white relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
                <svg
                    className="relative block w-full h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C300,80 600,80 900,40 C1050,20 1150,50 1200,80 L1200,120 L0,120 Z"
                        style={{ fill: '#fff' }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#215cc1' }}>
                        Get In Touch<span style={{ color: '#fbbf24' }}>.</span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Feel free to contact us to get any details or book a free lesson for your child!
                    </p>
                </div>

                {/* Contact Form and FAQ Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* FAQ Section */}
                    <div className="space-y-0">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#215cc1' }}>
                                Frequently Asked Questions<span style={{ color: '#fbbf24' }}>.</span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg">Quick answers to questions you may have</p>
                        </div>

                        <div className="overflow-hidden">
                            {faqs.map((faq, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-5 py-4 text-left flex items-center justify-between transition-colors duration-200 bg-white hover:bg-gray-50"
                                    >
                                        <span className="font-semibold text-base md:text-lg pr-4" style={{ color: '#215cc1' }}>
                                            {faq.question}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="#215cc1"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {activeFaq === index && (
                                        <div className="px-5 pb-4 pt-2 text-gray-700 text-sm md:text-base leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                    {index < faqs.length - 1 && <div className="border-t border-gray-200"></div>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg border-2 border-gray-200 p-6 md:p-8 bg-white shadow-lg">

                        {isSubmitted ? (
                            <div className="text-center py-8 md:py-12">
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                                    style={{ backgroundColor: '#fbbf24' }}
                                >
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3" style={{ color: '#215cc1' }}>
                                    Message Sent!
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg">We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2" style={{ color: '#215cc1' }}>
                                    Send us a Message<span style={{ color: '#fbbf24' }}>.</span>
                                </h2>
                                <p className="text-gray-600 text-sm md:text-base mb-6">Fill out the form below and we'll get back to you soon.</p>

                                <div className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                                            placeholder="What is this about?"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border-2 border-gray-200 text-gray-900 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-yellow-400 resize-none transition-colors duration-200"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <button className="w-full px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                    <p className="text-center text-xs md:text-sm text-gray-500 mt-2">
                                        We typically respond within 24 hours
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}