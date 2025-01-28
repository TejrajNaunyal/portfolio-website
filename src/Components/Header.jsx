import { useState } from "react";

const Header = () => {
    const brandName= "Tek Raj Naunyal";

   const[menuLink,setMenuLink]= useState([
        {
            title:"Home",
            link:"/home",
            id: 1
        },
        {
            title:"About",
            link:"/about",
            id: 2
        },
        {
            title:"Skill",
            link:"/skill",
            id: 3
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id: 4
        },
        {
            title:"Contact",
            link:"/contact",
            id: 5
        },
        
    ])
    return (
        <>
            <div className="flex justify-between items-center px-20 py-6 bg-gray-100 h-20 border">
                <div>
                    <h1 className="text-2xl font-bold">{brandName}</h1>
                </div>
                
                <div className="space-x-14">
                {menuLink.map((link)=>(<a id= {link.key} href={link.link} className="hover:text-orange-400">{link.title}</a>))}
                    {/* <a href="/home" className="hover:text-orange-400">Home</a>
                    <a href="/about" className="hover:text-orange-400">About</a>
                    <a href="/skill" className="hover:text-orange-400">Skill</a>
                    <a href="/portfolio" className="hover:text-orange-400">Portfolio</a>
                    <a href="/contact" className="hover:text-orange-400">Contact</a> */}
                </div>
                <div>
                    <button className="px-5 py-2 bg-black shadow-xl rounded-full text-white font-medium hover:bg-orange-500">Hire Me</button>
                </div>
            </div>
        </>
    );
}

export default Header;
