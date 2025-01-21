import React, { useEffect } from 'react';
import Profile from '../assets/profile_pic_1.jpg';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import "aos/dist/aos.css";
const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div
            className="flex flex-col gap-y-4 pt-24 tracking-wider  min-h-1  px-5  md:flex-row  md:pb-10 lg:px-14 xl:min-h-dvh bg-gray-100  pb-5"
            id="home"
        >
            <div className=" md:flex md:flex-col md:justify-center md:items-center  md:gap-5 lg:basis-2/4  md:pl-4 ">
                <h1 className="text-3xl w-full md:text-4xl" data-aos='slide-right'>
                    I am Muhammed Arsath CN<br/>
                    <div className="text-green-400 flex  text-left text-sm xl:text-lg pt-2">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially

                                'UI Designer',
                                2500,
                                'Full Stack Developer',
                                2500,
                            ]}
                            speed={10}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                        />
                    </div>
                </h1>
            </div>

            <div className="flex justify-center items-center pt-6 md:basis-1/2  py-4  " data-aos='zoom-in' >
                <img
                    src={Profile}
                    alt="profile_pic"
                    className="rounded-full w-72 ml-3"
                />

            </div>
        </div>
    );
};

export default Home;
