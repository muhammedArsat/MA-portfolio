import React from 'react';
import ProjectCarosual from '../projectcarosual/ProjectCarosual';
import Image1 from '../assets/T-W-1.png';
import Image2 from '../assets/T-W-2.png';
import Image3 from '../assets/T-W-3.png';
import Image4 from '../assets/T-W-4.png';
import Image5 from '../assets/T-W-5.png';
const Projects = () => {
    const P_1 = [Image1, Image2, Image3, Image4, Image5];
    const P_2 = [Image1, Image2, Image3, Image4, Image5];
    const P_3 = [Image1, Image2, Image3, Image4, Image5];
    const P_4 = [Image1, Image2, Image3, Image4, Image5];

    return (
        <div className="xl:min-h-dvh mx-2  " id='projects'>
            <h1 className="w-full text-center text-3xl mt-10 relative after:content-[''] after:absolute after:bottom-[-10px] md:after:top-11 after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:rounded-lg after:bg-green-300 mb-10">
                Projects
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
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
            </div>
        </div>
    );
};

export default Projects;
