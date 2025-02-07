import { useState } from 'react';

const About = () => {
    const [data, setData] = useState({
        title: "IT Graduate | Aspiring Full-Stack Developer",
        paragraph1: `Hi, I'm Tekraj Naunyal from Kathmandu, an Information Technology graduate from Westcliff University. I am passionate about software development and have a strong background in building applications using Spring Boot, React, and Django. I have hands-on experience with projects like learning applications, rental web apps, and job application tracking systems.`,
        paragraph2: `My dream projects include a rental web application where homeowners and renters can connect, and a learning app that fosters interaction between teachers and students. I'm also keen on integrating features like user roles, authentication, and CRUD operations. I have implemented unit and integration tests to ensure the robustness of my applications.`,
        paragraph3: `Apart from coding, I worked on an AI-driven Zappos project focusing on data validation and enrichment using Excel. I have a solid grasp of software architecture, performance optimization, and secure authentication practices. My goal is to build applications that make learning and renting experiences seamless and efficient.`,
        paragraph4: `Looking ahead, I plan to move to the USA to further my career in tech. I am enthusiastic about contributing to innovative projects, expanding my knowledge in full-stack development, and continuously improving my skills in the ever-evolving tech landscape.`,
        actionButton: {
            title: "View My Projects",
            link: "https://github.com/",
            target: "_blank"
        }
    });

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-5">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 underline">About Me</h1>
            </div>

            <div className="flex flex-col items-center max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
                <div className="text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{data.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">{data.paragraph1}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{data.paragraph2}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{data.paragraph3}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{data.paragraph4}</p>
                    <a href={data.actionButton.link}>
                        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition duration-300">
                            {data.actionButton.title}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
