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
            Hello, I'm Mitesh Sharma, currently pursuing my B.Tech. in Computer Science at VIT Bhopal.
          </p>
          <p className="pb-3">
            I have a strong passion for solving coding problems using C++. With over <u>600</u> problems successfully tackled on platforms like
            <a className="text-blue-500" href="https://leetcode.com/mitesh_0301/"> Leetcode | </a>
            <a className="text-blue-500" href="https://auth.geeksforgeeks.org/user/miteshmrsharma"> GFG | </a>
            <a className="text-blue-500" href="https://www.codingninjas.com/studio/profile/a8d307cd-7980-4c93-a054-0f29f871e8d0"> Code studio | </a>
            <a className="text-blue-500" href="https://codeforces.com/profile/code_mitesh"> CodeForces </a>
            etc.
            I continually strive to enhance my problem-solving skills.
          </p>
          <p className="pb-3">
            As a Full Stack Developer, I possess proficiency in various web development technologies. My skill set includes HTML, CSS (Tailwind CSS | Bootstrap), Javascript, React.js, Node.js, Express.js, MongoDB, Mongoose, Java (Novice), and SQL.
          </p>
          <p className="pb-3">
            Feel free to explore my portfolio for a deeper insight into my coding journey and projects.
          </p>
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