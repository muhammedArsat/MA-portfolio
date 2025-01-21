import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
const Skills = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="  xl:min-h-dvh mb-5 mt-10" id='skills'>
            <h1 className="w-full text-center text-3xl mt-10 relative after:content-[''] after:absolute after:bottom-[-10px] md:after:top-11 after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:rounded-lg after:bg-green-300" data-aos='slide-right'>
                Skills
            </h1>

            <div className="grid mt-12 grid-cols-2 gap-4 md:grid-cols-3 md:gap-y-4 lg:grid-cols-4 lg:gap-y-10 m-4">
                <div className="flex justify-between lg:justify-evenly items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg" data-aos='fade-up'>
                    <h1>C </h1>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png"
                        alt="Logo 1"
                        className="w-9"
                    />
                </div>

                <div className="flex justify-between lg:justify-evenly items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg" data-aos='fade-up'>
                    <h1>Java </h1>
                    <img
                        src="https://cdn.worldvectorlogo.com/logos/java.svg"
                        alt="Logo 1"
                        className="w-12"
                    />
                </div>

                <div className="flex justify-between lg:justify-evenly  items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg" data-aos='fade-up'>
                    <h1>Java Script</h1>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSod7CJvOSEFdtFtmH1pbaPYSW8M4gXMwsmWA&s"
                        alt="Logo 1"
                        className="w-9"
                    />
                </div>

                <div className="flex justify-between lg:justify-evenly items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg" data-aos='fade-up'>
                    <h1>Express JS</h1>
                    <img
                        src="https://img.icons8.com/color/512/express-js.png"
                        alt="Logo 1"
                        className="w-9"
                    />
                </div>

                <div className="flex justify-between lg:justify-evenly items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg" data-aos='fade-up'>
                    <h1>Spring Boot</h1>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s"
                        alt="Logo 1"
                        className="w-9"
                    />
                </div>

                <div className="flex justify-between lg:justify-evenly  items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg" data-aos='fade-up'>
                    <h1>MySQL</h1>
                    <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mysql-icon.png"
                        alt="Logo 1"
                        className="w-12"
                    />
                </div>

                <div className="flex justify-between lg:justify-evenly items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg"data-aos='fade-up'>
                    <h1>Figma</h1>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                        alt="Logo 1"
                        className="w-6"
                    />
                </div>

                <div className="flex justify-between lg:justify-evenly items-center shadow-lg  py-4 px-4 hover:border hover:border-green-400 transition-colors rounded-lg"data-aos='fade-up'>
                    <h1>Github</h1>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                        alt="Logo 1"
                        className="w-9"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
