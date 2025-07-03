import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const baseTextColor = 'text-[#93B1A6]';
    const hoverTextColor = 'hover:text-orange-500';

    return (
        <footer className="py-6 bg-[#0E1D2E] text-[#93B1A6] transition-colors -my-16 duration-300">
            <div className="container mx-auto text-center">
                {/* Social Links */}
                <div className="mb-4 flex justify-center space-x-6">
                    <a
                        href="https://github.com/Ranjan-Ravii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <Github
                            className={`w-6 h-6 transition-colors duration-300 ${baseTextColor} ${hoverTextColor}`}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ranjan-ravii/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <Linkedin
                            className={`w-6 h-6 transition-colors duration-300 ${baseTextColor} ${hoverTextColor}`}
                        />
                    </a>
                    <a
                        href="https://x.com/R_ranjan_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <Twitter
                            className={`w-6 h-6 transition-colors duration-300 ${baseTextColor} ${hoverTextColor}`}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/r_ranjan._/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300"
                    >
                        <Instagram
                            className={`w-6 h-6 transition-colors duration-300 ${baseTextColor} ${hoverTextColor}`}
                        />
                    </a>
                    <a
                        href="https://leetcode.com/u/inboxraviiranjan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-300 flex items-center"
                    >
                        <svg className={`w-6 h-6 transition-colors duration-300 ${baseTextColor} ${hoverTextColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M7.5 20.5L2.5 15.5L12 6L21.5 15.5L16.5 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.5 19.5L12 16L15.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-sm">
                    Made by Ravi Ranjan with <span className="text-orange-500">❤️</span>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
