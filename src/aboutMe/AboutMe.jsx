import React from 'react';


const AboutMe = () => {
    return (
        <div
            className="flex flex-col md:flex-row xl:min-h-dvh lg:justify-center lg:items-center  "
            id="about me"
        >
            <h1 className="w-full text-center text-3xl mt-10 relative after:content-[''] after:absolute after:bottom-[-10px] md:after:top-11 after:left-1/2 after:transform after:-translate-x-1/2 after:w-28 after:h-1 after:rounded-lg after:bg-green-300">
                About Me
            </h1>

            <div className="px-6 pt-8 flex flex-col gap-4 ">
                <h1 className=" font-medium md:text-lg md:text-left tracking-wide leading-6 text-justify text-gray-400">
                    Muhammed Arsath CN, a Computer Science Engineer with
                    expertise in full-stack development, proficient in both
                    front-end and back-end technologies, and experienced in
                    building comprehensive web applications.
                </h1>

                <a
                    href="../../public/portfolio-resume.pdf"
                    download ="Arsath-Resume"
                    class="w-44 border-2 border-green-400 px-4 py-5 text-center hover:bg-green-400 hover:text-white transition-colors"

                >
                    Download PDF
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
