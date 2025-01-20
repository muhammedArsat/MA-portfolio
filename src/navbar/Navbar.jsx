import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth',
        });
        setIsOpen(false); // Close the menu after clicking a link
    };

    return (
        <nav className="flex justify-between px-5 py-6 fixed top-0 z-20 w-full backdrop-blur-lg bg-opacity-80 shadow-lg bg-white md:py-8">
            <h1 className="text-2xl font-medium">MA</h1>
            <div className="md:hidden">
                <CiMenuFries size={30} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <ul
                className={`${
                    isOpen ? 'block' : 'hidden'
                } justify-evenly items-center  absolute w-11/12 top-20   flex flex-col gap-y-3 shadow-lg rounded-lg bg-white h-56 overflow-auto`}
            >
                <li
                    className="tracking-wider font-medium p-4 text-center"
                    onClick={(e) => handleScroll(e, 'home')}
                >
                    Home
                </li>
                <li
                    className="tracking-wider font-medium p-4"
                    onClick={(e) => handleScroll(e, 'about me')}
                >
                    About Me
                </li>
                <li
                    className="tracking-wider font-medium p-4"
                    onClick={(e) => handleScroll(e, 'education')}
                >
                    Education
                </li>
                <li
                    className="tracking-wider font-medium p-4"
                    onClick={(e) => handleScroll(e, 'skills')}
                >
                    Skills
                </li>
                <li
                    className="tracking-wider font-medium p-4"
                    onClick={(e) => handleScroll(e, 'projects')}
                >
                    Projects
                </li>
                <li
                    className="tracking-wider font-medium p-4"
                    onClick={(e) => handleScroll(e, 'contact')}
                >
                    Contact Me
                </li>
            </ul>
            <ul className="hidden md:flex justify-evenly items-center gap-x-5">
                <li
                    className="md:text-xl md:tracking-wide font-medium cursor-pointer"
                    onClick={(e) => handleScroll(e, 'home')}
                >
                    Home
                </li>
                <li
                    className="md:text-xl md:tracking-wide font-medium cursor-pointer"
                    onClick={(e) => handleScroll(e, 'about me')}
                >
                    About Me
                </li>
                <li
                    className="md:text-xl md:tracking-wide font-medium cursor-pointer"
                    onClick={(e) => handleScroll(e, 'education')}
                >
                    Education
                </li>
                <li
                    className="md:text-xl md:tracking-wide font-medium cursor-pointer"
                    onClick={(e) => handleScroll(e, 'skills')}
                >
                    Skills
                </li>
                <li
                    className="md:text-xl md:tracking-wide font-medium cursor-pointer"
                    onClick={(e) => handleScroll(e, 'projects')}
                >
                    Projects
                </li>
                <li
                    className="md:text-xl md:tracking-wide font-medium cursor-pointer"
                    onClick={(e) => handleScroll(e, 'contact')}
                >
                    Contact Me
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
