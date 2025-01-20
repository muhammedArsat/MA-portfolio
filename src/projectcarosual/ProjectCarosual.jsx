import React, { useState } from 'react';
import Image1 from '../assets/T-W-1.png';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ProjectCarosual = ({ children, title, desc, tech1,tech2, tech3,tech4 }) => {
    const [index, setIndex] = useState(0);
    const prev = () =>
        setIndex((curr) => (curr === 0 ? children.length - 1 : curr - 1));
    const next = () =>
        setIndex((curr) => (curr === children.length - 1 ? 0 : curr + 1));
    return (
        <div className="shadow-lg grid gap-4 p-4 rounded-lg w-full">
            <h1 className="text-2xl tracking-wider font-medium">
                {' '}
                Transport Permit Website
            </h1>
            <div className="relative ">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform ease-out duration-500"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>

                <div
                    className="absolute top-1/2 bg-green-400 rounded-full "
                    onClick={prev}
                >
                    <MdKeyboardArrowLeft size={35} className="text-white" />
                </div>

                <div
                    className="absolute right-0 top-1/2  bg-green-400 rounded-full"
                    onClick={next}
                >
                    <MdKeyboardArrowRight size={35} className="text-white" />
                </div>

                <div className="flex   justify-center items-center gap-2 mt-3">
                    <h1>{index+1} / {children.length}</h1>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
            <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors">
                    <h1 className=" flex justify-center items-center">React JS</h1>
                </div>
                <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors">
                <h1 className=" flex justify-center items-center">React JS</h1>
                </div>
                <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors">
                <h1 className="flex justify-center items-center">React JS</h1>
                </div>
                <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors">
                <h1 className=" flex justify-center items-center">React JS</h1>
                </div>
            </div>
            <h1 className="tracking-wider text-left text-slate-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur, incidunt omnis? Nostrum, ipsum. Ipsam, ea dolorem
                dolor vitae nulla nisi.
            </h1>
        </div>
    );
};

export default ProjectCarosual;
