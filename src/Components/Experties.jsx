import React, { useState } from 'react';
import bannerBackground from "../assets/banner.svg";
import HireModal from "./HireModal";  // Import the HireModal component

const Experties = () => {
  const [showModal, setShowModal] = useState(false);

  const handleHireClick = () => {
    setShowModal(true); // Open the modal when the button is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="bg-gray-200">
      <div className="pt-6">
        <h1 className="text-center text-3xl underline font-bold">
          My Expertise
        </h1>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="w-full text-white text-center"
          style={{
            background: `url(${bannerBackground})`,
            backgroundSize: "cover",
            height: "430px",
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="w-2/3">
              <h1 className="text-2xl font-semibold">My Expertise On Technologies</h1>
              <p className="text-left mt-5">
                As a passionate developer, I specialize in building innovative and scalable applications using a variety of technologies. Let’s work together to bring your ideas to life!
              </p>
              <button
                onClick={handleHireClick}
                className="mt-5 bg-black hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Left side content */}
      <div className="w-full flex items-center justify-center pb-10">
        <div className="flex justify-center pl-10 pt-10 ml-10 w-2/3 flex-wrap space-x-3">
          <div className="space-y-2">
            {/* List of Expertise */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full">
              <strong>GitHub</strong>: Version control and collaborative coding using GitHub.
            </p>
           {/* React */}
           <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">
              <strong>React</strong>: Building responsive, dynamic user interfaces for web apps.
            </p>

            {/* CSS */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">
              <strong>CSS</strong>: Styling and layout creation for elegant, functional design.
            </p>

            {/* HTML */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">
              <strong>HTML</strong>: Structuring web content with semantic HTML.
            </p>

            {/* Visual Studio */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 mx-2 py-2 font-semibold rounded-full text">
              <strong>Visual Studio</strong>: IDE for coding in various languages, including C#, .NET.
            </p>

            {/* Figma */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-3 mx-2 py-2 font-semibold rounded-full text">
              <strong>Figma</strong>: Designing intuitive interfaces and user experiences with Figma.
            </p>

            {/* Python */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-3 mx-2 py-2 font-semibold rounded-full text">
              <strong>Python</strong>: Leveraging Python for backend development, data analysis, and automation.
            </p>

            {/* JavaScript */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">
              <strong>JavaScript</strong>: Writing efficient and modern JavaScript for web interactivity.
            </p>

            {/* Node.js */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">
              <strong>Node.js</strong>: Backend JavaScript development for scalable and real-time applications.
            </p>

            {/* Django */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">
              <strong>Django</strong>: Building secure, robust backend systems with Python and Django.
            </p>

            {/* UI/UX Design */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">
              <strong>UI/UX Design</strong>: Creating user-friendly interfaces with a focus on user experience.
            </p>

            {/* Excel Expertise */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">
              <strong>Excel Expertise</strong>: Advanced skills in data analysis, automation, and reporting using Excel.
            </p>

            {/* Web Development */}
            <p className="hover:bg-orange-500 bg-gray-300 px-3 my-2 mx-2 py-2 font-semibold rounded-full text">
              <strong>Web Development</strong>: Full-stack development expertise in building modern, scalable web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Use the HireModal component */}
      <HireModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Experties;
