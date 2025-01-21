import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="p-4 bg-slate-300">
            <h1 className="text-center text-gray-600">
                Thank you for visiting my portfolio!. Feel free to explore my
                projects and connect with me
            </h1>

            <div className="flex justify-center items-center gap-2">
                <div className="bg-slate-300 w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-400 hover:text-white transition-colors">
                    <a
                        href="http://www.linkedin.com/in/muhammedarsath-c-n-62a49625a"
                        target="_blank"
                    >
                        <AiFillLinkedin size={30} />
                    </a>
                </div>
                <div className="bg-slate-300 w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-400 hover:text-white transition-colors">
                    <a
                        href="https://www.instagram.com/_iamarsath?igsh=cmluemg0aXpoeHNx"
                        target="_blank"
                    >
                        <FiInstagram size={30} />
                    </a>
                </div>
                <div className="bg-slate-300 w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-400 hover:text-white transition-colors">
                    <a href="https://github.com/muhammedArsat" target="_blank">
                        <FiGithub size={30} />
                    </a>
                </div>
            </div>
            <div className="mt-4 text-center text-gray-600">
                <strong>Copyright</strong> &copy; {currentYear}. All rights
                reserved.
            </div>
        </div>
    );
};

export default Footer;
