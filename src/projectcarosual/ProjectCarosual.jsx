import React, { useState } from 'react';
import Image1 from '../assets/T-W-1.png';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ProjectCarosual = ({ children, title, desc, tech1,tech2, tech3,tech4,projectLink }) => {
    const [index, setIndex] = useState(0);
    const prev = () =>
        setIndex((curr) => (curr === 0 ? children.length - 1 : curr - 1));
    const next = () =>
        setIndex((curr) => (curr === children.length - 1 ? 0 : curr + 1));
    return (
        <div className="shadow-lg grid gap-4 p-4 rounded-lg w-full">
            <h1 className="text-2xl tracking-wider font-medium">
                {' '}
              {title}
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
            <div className="grid grid-cols-3 gap-3 xl:grid-cols-4">
                 <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors">
                    <h1 className=" flex justify-center items-center">{tech1}</h1>
                </div>
                <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors ">
                <h1 className=" flex justify-center items-center">{tech2}</h1>
                </div>
                <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors">
                <h1 className="flex justify-center items-center">{tech3}</h1>
                </div>
                <div className="border border-green-400 px-1 py-3 rounded-md hover:scale-105  hover:text-white hover:bg-green-400 transition-colors">
                <h1 className=" flex justify-center items-center">{tech4}</h1>
                </div>
            </div>
            <h1 className="text-green-400"><a href={projectLink} target='__blank'>Github Link</a></h1>
            <h1 className="tracking-wider text-left text-slate-400">
                {desc}
            </h1>
        </div>
    );
};

export default ProjectCarosual;
