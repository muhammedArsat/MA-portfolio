import React from 'react';

const Education = () => {
    return (
        <div className=" gap-y-4  xl:min-h-dvh  " id='education'>
            <div ></div>
            <h1 className="w-full text-center text-3xl mt-10 relative after:content-[''] after:absolute after:bottom-[-10px] md:after:top-11 after:left-1/2 after:transform after:-translate-x-1/2 after:w-28 after:h-1 after:rounded-lg after:bg-green-300">
                Education
            </h1>
            <div className="flex flex-col mx-5 my-10 ">
                <div>
                    <h1 className=" font-medium md:text-lg tracking-wide leading-6  text-gray-400  pt-8 md:text-left text-justify">
                        My educational journey has equipped me with a strong
                        foundation in Computer Science Engineering, complemented
                        by specialized courses and hands-on projects that have
                        honed my skills in full-stack development and software
                        engineering.
                    </h1>
                </div>
            </div>

            <div className="grid  w-full   gap-4 mb-5 md:grid-cols-3 md:gap-x-0  ">
                {/* college Degree */}
                <div className=" px-4 flex flex-col gap-3 justify-around  border border-green-400 mx-5 hover:bg-green-400 hover:text-black  p-4 transition-colors ">
                    <h1 className="text-lg font-medium text-gray-400 hover:text-white text-left ">
                        2022-2026
                    </h1>
                    <h1 className="text-xl font-bold tracking-wider leading-8">
                        B.E. Computer Science And Engineering
                    </h1>
                    <h1 className="text-lg text-gray-400 leading-6 font-medium tracking-wider  hover:text-white">
                        Completed my Bachelor of Engineering in Computer Science
                        from Bannari Amman Institute Of Technology .
                    </h1>
                </div>
                {/* HSC Degree */}
                <div className=" px-4 flex flex-col gap-3 justify-around  border border-green-400 mx-5 hover:bg-green-400 hover:text-black  p-4 transition-colors">
                    <h1 className="text-lg font-medium text-gray-400 hover:text-white text-left ">
                        2021-2022
                    </h1>
                    <h1 className="text-xl font-bold tracking-wider leading-8">
                        Higher Secondary
                    </h1>
                    <h1 className="text-lg text-gray-400 leading-6 font-medium tracking-wider  hover:text-white">
                        Completed my 12th Grade Higher Secondary (HSC) in
                        Arumugam Academy Matric Higher Secondary School.
                    </h1>
                </div>
                {/* SSLC Degree */}
                <div className=" px-4 flex flex-col gap-3 justify-around  border border-green-400 mx-5 hover:bg-green-400 hover:text-black  p-4 transition-colors">
                    <h1 className="text-lg font-medium text-gray-400 hover:text-white text-left ">
                        2019-2020
                    </h1>
                    <h1 className="text-xl font-bold tracking-wider leading-8">
                        SSLC
                    </h1>
                    <h1 className="text-lg text-gray-400 leading-6 font-medium tracking-wider hover:text-white">
                        Completed my 10th Standard (SSLC) in Arumugam Academy
                        Matric Higher Secondary School.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Education;
