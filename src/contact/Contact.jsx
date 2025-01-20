import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className="flex flex-col border-t-green-400 border-2 mt-5 " id='contact'>
            <h1 className="w-full text-center text-3xl mt-10 relative after:content-[''] after:absolute after:bottom-[-10px] md:after:top-11 after:left-1/2 after:transform after:-translate-x-1/2 after:w-36 after:h-1 after:rounded-lg after:bg-green-300 mb-10 ">
                Contact Me
            </h1>
            <div className="md:flex xl:basis-1/2 ">
                <div className="ml-8 grid gap-2 md:gap-0  xl:flex-0 md:h-96 ">
                    <h1 className="text-xl font font-medium">Contact Info</h1>

                    <div className="flex flex-col">
                        <FiMapPin size={25} />
                        <h1 className=" text-gray-400">
                            8/76 South Manthai Street,Pallapatti, Karur
                        </h1>
                    </div>
                    <div>
                        <FiMail size={25} />
                        <h1 className=" text-gray-400 ">
                            muhammedarsathcn@gmail.com
                        </h1>
                    </div>
                    <div>
                        <FiPhone size={25} />
                        <h1 className=" text-gray-400 ">9443663804</h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-medium ">Follow Me </h1>
                        <div className="flex gap-4 mt-4">
                            <FiInstagram size={30} />
                            <AiFillLinkedin size={30} />
                        </div>
                    </div>
                </div>

                <div className="m-8 flex flex-col gap-4  md:relative md:-top-10 xl:flex-1 ">
                    <div className="flex items-center justify-center flex-col gap-4 ">
                        <label
                            htmlFor="name"
                            className="text-xl font-medium w-full"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="bg-white shadow-md border rounded-lg w-full px-4 py-5 hover:rounded-xl outline-green-400"
                            placeholder="Your Name..."
                        />
                    </div>
                    <div className="md:flex  gap-x-3 ">
                        <div className="flex items-center justify-center flex-col gap-4  xl:flex-1 ">
                            <label
                                htmlFor="name"
                                className="text-xl font-medium w-full "
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="bg-white shadow-md border rounded-lg w-full  px-4 py-5 hover:rounded-2xl outline-green-400 mb-4 "
                                placeholder="+91 1234567890"
                            />
                        </div>

                        <div className="flex items-center justify-center flex-col gap-4 xl:flex-1 xl:relative xl:-top-2">
                            <label
                                htmlFor="name"
                                className="text-xl font-medium w-full "
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                className="bg-white shadow-md border rounded-lg w-full  px-4 py-5  outline-green-400 "
                                placeholder="youremail@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-col gap-4 ">
                        <label
                            htmlFor="name"
                            className="text-xl font-medium w-full"
                        >
                            Message
                        </label>
                        <textarea
                            type="text"
                            className="bg-white shadow-md border rounded-lg w-full px-4 py-5 hover:rounded-2xl outline-green-400 h-36 resize-none "
                            placeholder="Your Message..."
                        />
                    </div>
                    <div className=" flex justify-start items-start ">
                        <button className=" mb-9 border border-green-400 px-4 py-5 text-lg  hover:bg-green-400 hover:text-white transition-colors w-44">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
