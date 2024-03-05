import React from "react";
import HeroImg from "../assets/Mitesh.jpeg";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillTwitterCircle
} from "react-icons/ai";

const Hero = () => {
    return (
        <section className="px-5 text-white py-16">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0 slide-in-left">
                    <h2 className="text-4xl lg:text-6xl ">
                        Hi, <br />I am <span className="">Mitesh</span><br />
                        A <span className="underline text-blue-600 animate-pulse italic">Pro</span>grammer
                    </h2>

                    <p className="py-5">
                        I am proficient in programming in C++, and built websites using MERN stack...
                    </p>

                    <div className="flex py-5 ">
                        <a
                            href="https://github.com/mitesh-sharma"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                          
                            <AiFillGithub size={40} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mitesh-sharma3102/"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                
                            <AiFillLinkedin size={40} />
                        </a>
                        <a
                            href="https://twitter.com/Mitesh3102"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                
                            <AiFillTwitterCircle size={40} />
                        </a>
                        <a
                            href="https://www.instagram.com/_mitesh_sharma_/"
                            className="pr-4 inline-block hover:text-blue-400"
                        >
                
                            <AiFillInstagram size={40} />
                        </a>
                    </div>

                    <a
                        href="/#Projects"
                        className=" border-2 text-white px-14 py-3 hover:bg-white rounded-xl hover:bg-gradient-to-br from-blue-900 to-indigo-400 focus:ring-1 focus:outline-none focus:ring-blue-400"
                    >
                        See Projects
                    </a>
                </div>

                <div className="flex justify-center contrast-125 slide-from-top">
                    <img
                        src={HeroImg}
                        alt="coding illustration"
                        className="w-96 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;