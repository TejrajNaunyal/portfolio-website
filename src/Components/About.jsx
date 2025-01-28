import {useState} from 'react';
import bannerImage from "../assets/img2.jpg"
const About = () =>{
    const [data, setDate]=useState({
        image: bannerImage,
        title: "Frontend Developer in React js",
        paragraph1:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ratione incidunt saepe recusandae ducimus corrupti!`,
        paragraph2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam beatae eaque eum aliquam eius dicta nemo, nobis, et at vel ratione ea ullam exercitationem blanditiis reprehenderit sunt nisi minim`,
        actionButton:{
            title: "Read More",
            link:"#"


        }

    })
    return(
        <div className=" pb-10 bg-gray-200 ">
            <div className=" items-center text-center justify-center">
                <h1 className="text-3xl pt-4 font-bold underline items-center ">About Me</h1>
            </div>
            <div className="flex">

            <div className="w-full mt-12  justify-center">
                <img className="rounded-full ml-14 shadow-lg "
                src={data.image} 
                style={{height:"300px",width:"300px"}}
                />
                <div className="w-full "></div>

            </div>
            <div className="flex w-full">
                <div className="mt-20">
                    <h1 className="font-bold text-3xl">{data.title}</h1>
                    <p className="mt-3 pr-14">{data.paragraph1}</p>
                    <p className="mt-3 pr-14">{data.paragraph2}</p>
                <button className="mt-3 px-4 py-3 bg-black text-white rounded-full hover:bg-orange-500">{data.actionButton.title}</button>
                </div>

            </div>

                </div>

        </div>
    )
}
export default About;