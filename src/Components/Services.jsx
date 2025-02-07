import { useState } from "react";

const Services = () => {
  // State for toggling the visibility of extended descriptions
  const [expanded, setExpanded] = useState({
    webDevelopment: false,
    uiUxDesign: false,
    backendDevelopment: false,
    excelExpertise: false,
  });

  // Toggle the expanded state for a specific section
  const toggleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const data = {
    content1: {
      title: "Web Development",
      shortDesc: `As a  Frontend Developer , I specialize in building responsive, user-friendly websites that prioritize performance and user experience.`,
      fullDesc: `As a  Frontend Developer , I specialize in building responsive, user-friendly websites that prioritize performance and user experience. 
      Leveraging  React  and  Node.js , I create seamless web applications that load fast and scale well. 
      On the backend, I use  Django  to ensure the security and reliability of your web services, building RESTful APIs and integrating various databases.`,
      actionButton: {
        name: "See More",
        link: "#"
      }
    },
    content2: {
      title: "UI/UX Design",
      shortDesc: `With a focus on user-centered design, I craft visually appealing and intuitive interfaces.`,
      fullDesc: `With a focus on user-centered design, I craft visually appealing and intuitive interfaces. 
      I use tools like  Figma ,  Adobe XD , and  Sketch  to create prototypes and wireframes. 
      My goal is to ensure that the user journey is smooth, from the first click to the final interaction. I also conduct user testing to validate designs and improve usability based on real feedback.`,
      actionButton: {
        name: "See More",
        link: "#"
      }
    },
    content3: {
      title: "Backend Development (Django)",
      shortDesc: `I specialize in building robust backend systems using  Django , a powerful and flexible Python framework.`,
      fullDesc: `I specialize in building robust backend systems using  Django , a powerful and flexible Python framework. 
      Whether you're looking to integrate databases, create RESTful APIs, or ensure security, I can build reliable and scalable backend solutions that handle a large number of users efficiently. 
      I also focus on integrating modern technologies like  JWT authentication ,  OAuth , and  GraphQL  for improved data exchange and system security.`,
      actionButton: {
        name: "See More",
        link: "#"
      }
    },
    content4: {
      title: "Excel Expertise",
      shortDesc: `I have extensive experience working with Excel, specializing in data analysis, creating complex formulas, and automating tasks using  VBA  and  macros .`,
      fullDesc: `I have extensive experience working with Excel, specializing in data analysis, creating complex formulas, and automating tasks using  VBA  and  macros . 
      Whether it's building dynamic reports, visualizing data with  charts and graphs , or cleaning and processing large datasets, I ensure the data is both accurate and easily understandable. 
      I can also help streamline workflows by automating repetitive tasks to save time and reduce errors.`,
      actionButton: {
        name: "See More",
        link: "#"
      }
    }
  };

  return (
    <div className="bg-slate-300 py-16">
      <div className="text-center underline font-bold text-3xl">
        <h1>My Services</h1>
      </div>
      <div className="px-12 py-14 flex justify-center space-x-10 pb-5">
        {/* Web Development */}
        <div className="bg-gray-400 px-4 py-6 rounded-3xl w-full hover:bg-orange-400 hover:text-white">
          <div className="flex justify-center">
            <i className="fa-solid fa-globe text-3xl my-5"></i>
          </div>
          <h1 className="text-2xl font-semibold text-center">{data.content1.title}</h1>
          <p className="my-5 mx-3">
            {expanded.webDevelopment ? data.content1.fullDesc : data.content1.shortDesc}
          </p>
          <button
            className="px-7 hover:bg-orange-600 rounded-full py-3 bg-black text-white mx-auto block"
            onClick={() => toggleExpand("webDevelopment")}
          >
            {expanded.webDevelopment ? "Show Less" : "See More"}
          </button>
        </div>

        {/* UI/UX Design */}
        <div className="bg-gray-400 px-4 py-6 rounded-3xl w-full hover:bg-orange-400 hover:text-white">
          <div className="justify-center flex">
            <i className="fa-solid fa-paintbrush text-3xl my-5"></i>
          </div>
          <h1 className="text-2xl font-semibold text-center">{data.content2.title}</h1>
          <p className="my-5 mx-3">
            {expanded.uiUxDesign ? data.content2.fullDesc : data.content2.shortDesc}
          </p>
          <button
            className="px-7 hover:bg-orange-600 rounded-full py-3 bg-black text-white mx-auto block"
            onClick={() => toggleExpand("uiUxDesign")}
          >
            {expanded.uiUxDesign ? "Show Less" : "See More"}
          </button>
        </div>

        {/* Backend Development (Django) */}
        <div className="bg-gray-400 px-4 py-6 rounded-3xl w-full hover:bg-orange-400 hover:text-white">
          <div className="justify-center flex">
            <i className="fa-brands fa-python text-3xl my-5"></i>
          </div>
          <h1 className="text-2xl font-semibold text-center">{data.content3.title}</h1>
          <p className="my-5 mx-3">
            {expanded.backendDevelopment ? data.content3.fullDesc : data.content3.shortDesc}
          </p>
          <button
            className="px-7 hover:bg-orange-600 rounded-full py-3 bg-black text-white mx-auto block"
            onClick={() => toggleExpand("backendDevelopment")}
          >
            {expanded.backendDevelopment ? "Show Less" : "See More"}
          </button>
        </div>

        {/* Excel Expertise */}
        <div className="bg-gray-400 px-4 py-6 rounded-3xl w-full hover:bg-orange-400 hover:text-white">
          <div className="justify-center flex">
            <i className="fa-solid fa-file-excel text-3xl my-5"></i>
          </div>
          <h1 className="text-2xl font-semibold text-center">{data.content4.title}</h1>
          <p className="my-5 mx-3">
            {expanded.excelExpertise ? data.content4.fullDesc : data.content4.shortDesc}
          </p>
          <button
            className="px-7 hover:bg-orange-600 rounded-full py-3 bg-black text-white mx-auto block"
            onClick={() => toggleExpand("excelExpertise")}
          >
            {expanded.excelExpertise ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
