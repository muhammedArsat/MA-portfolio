import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProjectCarosual from '../projectcarosual/ProjectCarosual';
import Image1 from '../assets/T-W-1.png';
import Image2 from '../assets/T-W-2.png';
import Image3 from '../assets/T-W-3.png';
import Image4 from '../assets/T-W-4.png';
import Image5 from '../assets/T-W-5.png';
import Image6 from '../assets/P-2-1.png';
import Image7 from '../assets/P-2-2.png';
import Image8 from '../assets/P-2-3.png';
import Image9 from '../assets/P-3-1.png';
import Image10 from '../assets/P-3-2.png';
import Image11 from '../assets/P-3-3.png';
import Image12 from '../assets/P-3-4.png';
import Image13 from '../assets/P-3-6.png';
import Image14 from '../assets/P-3-7.png';

const Projects = () => {
    const P_1 = [Image1, Image2, Image3, Image4, Image5];
    const P_2 = [Image6, Image7, Image8];
    const P_3 = [Image9, Image10, Image11, Image12, Image13, Image14];
    const P_4 = [Image1, Image2, Image3, Image4, Image5];
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="xl:min-h-dvh mx-2  " id="projects">
            <h1
                className="w-full text-center text-3xl mt-10 relative after:content-[''] after:absolute after:bottom-[-10px] md:after:top-11 after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:rounded-lg after:bg-green-300 mb-10"
                data-aos="slide-right"
            >
                Projects
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
                <div data-aos="fade-up">
                    <ProjectCarosual
                        title={'Transport Permit Website'}
                        tech1={'React Js'}
                        tech2={'Spring Boot'}
                        tech3={'PostgreSQL'}
                        tech4={'Rest API'}
                        desc={
                            ' A user-friendly platform for applying and managing transport permits, streamlining the process for both applicants and authorities.'
                        }
                        projectLink={"https://www.github.com/muhammedArsat/Transport-permit"}
                    >
                        {P_1.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`image ${index + 1}`}
                                />
                            );
                        })}
                    </ProjectCarosual>
                </div>

                <div data-aos="fade-up">
                    <ProjectCarosual
                        title={'Disaster Relief Coordination'}
                        tech1={'React Js'}
                        tech2={'Node Js'}
                        tech3={'Mongo DB'}
                        tech4={'Rest API'}
                        desc={
                            '  An efficient system for coordinating disaster relief efforts, ensuring quick response and resource allocation during emergencies.'
                        }
                        projectLink={"https://www.github.com/muhammedArsat/Disaster-Relief-Coordination"}
                    >
                        {P_2.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`image ${index + 1}`}
                                />
                            );
                        })}
                    </ProjectCarosual>
                </div>

                <div data-aos="fade-up">
                    <ProjectCarosual
                        title={'Review Scheduling Portal'}
                        tech1={'React Js'}
                        tech2={'Spring Boot'}
                        tech3={'MySQL'}
                        tech4={'Rest API'}
                        desc={
                            '   A portal for scheduling and managing reviews, enhancing productivity and organization for reviewers and administrators.'
                        }
                        projectLink={"https://www.github.com/muhammedArsat/project-slot-booking"}
                    >
                        {P_3.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`image ${index + 1}`}
                                />
                            );
                        })}
                    </ProjectCarosual>
                </div>

                {/* <div data-aos="fade-up">
                    <ProjectCarosual>
                        {P_1.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`image ${index + 1}`}
                                />
                            );
                        })}
                    </ProjectCarosual>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;
