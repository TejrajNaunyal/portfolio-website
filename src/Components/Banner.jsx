import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import bannerImage from "../assets/ban1.png";
import bannerBackground from "../assets/banner.svg";
const Banner = () => {
  const el= useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I am Frontend Developer", "I am Backend Developer", "I am React Developer", "I am Node Js Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  const[data,setDate]=useState({
    data1:"Hi, I am",
    data2:"Tekraj Naunyal",
    data3: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
    ipsum quisquam blanditiis debitis, dolore, maxime asperiores ab, ut
    nihil ad esse. Suscipit, quasi natus laudantium provident quae fugit
    optio debitis!`,
   actionButton:{
    title:"Contact Me",
    link:"# "
   },
   image:bannerImage,
   background:bannerBackground,

  })
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
        <div className="w-2/3 font-serif text-white ">
          <h3 className="mt-7 text-3xl font-semibold">{data.data1}</h3>
          <h1 className="mt-3 text-5xl font-bold">{data.data2}</h1>
          <h2 className="mt-3 text-2xl"><span ref={el}></span></h2>
          <p>
            {data.data3}
          </p>
          <div className="icons space-x-5 mt-1 flex">
            <a className="bg-slate-900  hover:bg-amber-700  cursor-pointer rounded-full h-10 w-10 px-3 py-3 justify-center flex items-center" href="">  <i class="fa-brands fa-facebook text-2xl"></i> </a>
            <a className="bg-slate-900 hover:bg-amber-700  cursor-pointer  rounded-full h-10 w-10 px-3 py-3 justify-center flex items-center" href="">  <i class="fa-brands fa-instagram text-2xl"></i> </a>
            <a className="bg-slate-900  hover:bg-amber-700 cursor-pointer rounded-full h-10 w-10 px-3 py-3 justify-center flex items-center" href="">  <i class="fa-brands fa-youtube text-2xl"></i> </a>
            <a className="bg-slate-900  hover:bg-amber-700 cursor-pointer rounded-full h-10 w-10 px-3 py-3 justify-center flex items-center" href="">  <i class="fa-brands fa-linkedin text-2xl"></i> </a>
       
          </div>
          <br />
          <a
            className="px-3  py-3 align-middle bg-black shadow-xl rounded-full text-white font-medium hover:bg-orange-500 "
            href="/contact"
          >
            {data.actionButton.title}
          </a>
        </div>
      </div>
      <div className="w-full mt-3 flex justify-center">
        <img
          className="rounded-full shadow-lg"
          src={data.image}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default Banner;
