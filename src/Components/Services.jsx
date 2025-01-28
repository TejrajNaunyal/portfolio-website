import { useState } from "react";
const Services = () => {
    const[data]=useState({
        content1:{
            title:"Web Development",
            div1:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus excepturi rem velit rerum sunt asperiores dolorum qui
            explicabo exercitationem omnis.`,
            actionButton:{
                name:"Check",
                link:"#"
            }},
        content2:{
            title:"Android Development",
            div1:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            beatae illum at, accusantium magni dignissimos facere libero maxime
            ab minima?`,
            actionButton:{
                name:"Check",
                link:"#"
            }},
        content3:{
            title:"Backend Development",
            div1:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur autem perspiciatis ex sapiente praesentium deserunt
            aliquid soluta quis itaque!`,
            actionButton:{
                name:"Check",
                link:"#"
            }

        }
    })
  return (
    <div className="bg-slate-300 py-16">
      <div className="text-center underline font-bold text-3xl">
        <h1>My Services</h1>
      </div>
      <div className="px-12 py-14 flex justify-center space-x-10 pb-5">
        <div className="bg-gray-400 px-4 py-6 rounded-3xl w-full hover:bg-orange-400 hover:text-white">
          <div className="flex justify-center">
            <i className="fa-brands fa-aws text-3xl my-5"></i>
          </div>
          <h1 className="text-2xl font-semibold text-center">{data.content1.title}</h1>
          <p className="my-5 mx-3">
           {data.content1.div1}
          </p>
          <button className="px-7  hover:bg-orange-600 rounded-full py-3 bg-black text-white mx-auto block">
           {data.content1.actionButton.name}
          </button>
        </div>
        <div className="bg-gray-400 px-4 py-6 rounded-3xl w-full  hover:bg-orange-400 hover:text-white">
          <div className="justify-center flex">

          <i class="fa-brands fa-react text-3xl my-5"></i>
          </div>
          <h1 className="text-2xl font-semibold text-center">
          {data.content2.title}
          </h1>
          <p className="my-5 mx-3">
          {data.content2.div1}
          </p>
          <button className="px-7  hover:bg-orange-600 rounded-full py-3 bg-black text-white mx-auto block">
          {data.content2.actionButton.name}
          </button>
        </div>
        <div className="bg-gray-400 px-4 py-6 rounded-3xl w-full  hover:bg-orange-400 hover:text-white">
          <div className="justify-center flex">

          <i class="fa-brands fa-android text-3xl my-5"></i>
          </div>
          <h1 className="text-2xl font-semibold text-center">
          {data.content3.title}
          </h1>
          <p className="my-5 mx-3">
          {data.content3.div1}
          </p>
          <button className="px-7  hover:bg-orange-600 rounded-full py-3 bg-black text-white mx-auto block">
          {data.content3.actionButton.name}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Services;
