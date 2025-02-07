import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import bannerImage from "../assets/ban1.png";
import bannerBackground from "../assets/banner.svg";

const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am Frontend Developer",
        "I am Backend Developer",
        "I am React Developer",
        "I am Node Js Developer",
      ], // Strings to display
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const data = {
    data1: "Hi, I am",
    data2: "Tekraj Naunyal",
    data3: `Passionate about building innovative and efficient web applications with cutting-edge technologies like React, Node.js, and more. Let’s build something amazing together!`,
    actionButton: {
      title: "Let's Connect",
      link: "https://www.linkedin.com/in/tek-raj-naunyal-29203123a/",
      target: "_blank"
    },
    image: bannerImage,
    background: bannerBackground,
  };

  return (
    <div className="flex bg-gray-300">
      <div
        style={{
          backgroundImage: `url(${data.background})`,
          backgroundSize: "cover",
          height: "430px",
        }}
        className="w-full flex justify-center"
      >
        <div className="w-2/3 font-serif text-white flex flex-col justify-center items-start py-16">
          <h3 className="text-3xl font-semibold">{data.data1}</h3>
          <h1 className="mt-3 text-5xl font-bold">{data.data2}</h1>
          <h2 className="mt-3 text-2xl">
            <span ref={el}></span>
          </h2>
          <p className="mt-4 text-lg">{data.data3}</p>

          {/* Contact Button */}
          <a
            className="mt-5 px-5 py-3 bg-black shadow-xl rounded-full text-white font-medium hover:bg-orange-500 transition duration-300"
            href={data.actionButton.link}
          >
            {data.actionButton.title}
          </a>
        </div>
      </div>

      {/* Profile Image with animation */}
      <div className="w-full mt-6 flex justify-center">
        <img
          className="rounded-full shadow-lg transform transition duration-500 hover:scale-105"
          src={data.image}
          alt="Tekraj Naunyal"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default Banner;
