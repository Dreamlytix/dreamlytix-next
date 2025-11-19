import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-blue-900 text-white">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
                <svg
                    className="relative block w-full h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C300,80 600,80 900,40 C1050,20 1150,50 1200,80 L1200,120 L0,120 Z"
                        className="fill-blue-900"
                        style={{ fillOpacity: 1 }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4 group">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                                Dreamlytix
                            </h2>
                        </Link>
                        <p className="text-blue-100 max-w-md text-lg leading-relaxed">
                            You Dream, We Build. Transforming your ideas into exceptional digital experiences.
                        </p>
                        <div className="flex space-x-4 mt-8">
                            <SocialLink href="#" label="Twitter" icon="twitter" />
                            <SocialLink href="#" label="GitHub" icon="github" />
                            <SocialLink href="#" label="LinkedIn" icon="linkedin" />
                            <SocialLink href="#" label="Instagram" icon="instagram" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-6 relative inline-block">
                            Company
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                        </h3>
                        <ul className="space-y-4">
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/services" label="Services" />
                            <FooterLink href="/portfolio" label="Portfolio" />
                            <FooterLink href="/careers" label="Careers" />
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-6 relative inline-block">
                            Support
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-cyan-400 -mb-2"></span>
                        </h3>
                        <ul className="space-y-4">
                            <FooterLink href="/contact" label="Contact" />
                            <FooterLink href="/privacy" label="Privacy Policy" />
                            <FooterLink href="/terms" label="Terms of Service" />
                            <FooterLink href="/docs" label="Documentation" />
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-blue-700/50 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-blue-200 text-sm">
                        © {currentYear} Dreamlytix. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-blue-200">
                        <span className="flex items-center">Made with <span className="text-red-400 mx-1 animate-pulse">❤️</span></span>
                        <span>•</span>
                        <span>Next.js & TypeScript</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: string }) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'twitter':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                );
            case 'github':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <a
            href={href}
            className="text-blue-200 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 inline-block"
            aria-label={label}
        >
            {getIcon(icon)}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-blue-100 hover:text-cyan-300 transition-all duration-300 hover:translate-x-1 inline-block relative group"
            >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </li>
    );
}