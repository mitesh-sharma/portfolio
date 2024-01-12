import React from "react";
import netbook from "../assets/netbook.png";
import sortx from "../assets/sortx.png";
import Portfolio from "../assets/Portfolio.png";
import ser from "../assets/SER.png";
const Projects = () => {
    const projects = [
        {
            img: netbook,
            title: "NetBook",
            desc: "A private and secure digital journal. Built with Node.js, MongoDB, React, Redux and Bootstrap ",
            live: "https://netbook-beta.vercel.app/login",
            code: "https://github.com/mitesh-sharma/NetBook",
        },
        {
            img: sortx,
            title: "Sort-X",
            desc: "A sorting visualizer website. Built using React and Tailwind CSS",
            live: "https://sort-x.vercel.app//",
            code: "https://github.com/mitesh-sharma/Sort-X",
        },
        {
            img: ser,
            title: "Speech Emotion Recognition",
            desc: "A Machine Learning Project which classifies different incoming human speech audio file into emotions",
            live: "https://github.com/mitesh-sharma/Speech-Emotion-Recognition",
            code: "https://github.com/mitesh-sharma/Speech-Emotion-Recognition",
        },
        {
            img: Portfolio,
            title: "Portfolio Website",
            desc: "Personal Portfolio Website. Used React for the development of this Website",
            live: "/",
            code: "https://github.com/mitesh-sharma/portfolio",
        },
    ];

    return (
        <section className=" text-white px-5 py-32" id="Projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        Projects
                    </h2>
                </div>

                <div className="about-img"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="relative" key={i}>
                            <img className="rounded-lg h-[270px] w-[250px]" src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[85%]  bg-gray-900  opacity-0 duration-500 justify-center flex-col hover:opacity-100 rounded-lg">
                                <p className="flex py-5 text-center mx-auto font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto">
                                    <a
                                        href={project.live}
                                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold rounded-lg"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.code}
                                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold rounded-lg"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;