import React from "react";
import AboutImg from "../assets/about-img.png";
const About = () => {
  return (
    <section className="bg-gray-900 text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-3">
            Hi, My Name Is Mitesh Sharma. I love to solve coding problems using C++, I have solved <u>500+</u> problems on various coding platforms like
            <a className="text-blue-500" href="https://leetcode.com/mitesh_0301/"> Leetcode | </a>
            <a className="text-blue-500" href="https://auth.geeksforgeeks.org/user/miteshmrsharma"> GFG | </a>
            <a className="text-blue-500" href="https://www.codingninjas.com/studio/profile/a8d307cd-7980-4c93-a054-0f29f871e8d0"> Code studio | </a>
            <a className="text-blue-500" href="https://codeforces.com/profile/code_mitesh"> CodeForces </a>
            etc.
          </p>
          <p className="pb-3">
            I am a Full Stack Developer, I build beautiful websites with React and
            Tailwind CSS, I am proficient in Web Development with languages/frameworks like React.js, Redux, Axios, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, SQL etc.
          </p>
          <p>I also have proficiency in other languages like Java, Python with Machine Learning.</p>

        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;