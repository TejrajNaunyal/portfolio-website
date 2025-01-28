import { useEffect } from 'react';
import {useRef} from 'react';
import Typed from 'typed.js';
const Footer = () => {
  const tech=useRef(null);
  useEffect(() => {
    const typed = new Typed(tech.current,{
      strings:["Suscribed","Be Tune", "Be Update", "Join Us"],
      startDelay:100,
      typeSpeed:50,
      backDelay:50,
      backSpeed:10,
      loop:true,

    })
  
    return () => {
      typed.destroy();
    }
  }, [])
  
  return (
    <div className="bg-white px-56 py-16 w-full ">
      <div className="bg-black flex text-center justify-center pt-10 text-white">
        <div>
          <h1 className="text-3xl font-bold mb-5 text-orange-600"><span ref={tech}></span></h1>
          <p>
            SignUp to get receive periodic info about news prints and projects
          </p>
          <div className="flex mt-7 justify-center space-x-3">
            <input
              type="email"
              className=" bg-white px-4 py-2 border border-gray-300 "
              placeholder="Email Address"
            />
            <button className="text-orange-600 border-2 border-orange-600 px-4 py-2 ">
              SIGN UP
            </button>
          </div>

          <p className="mt-5 mb-10">Your privacy will be respected.</p>
        </div>
      </div>
      <p className="mt-6 text-center">
        © 2024 The Best Is Back Inc. All right researved
      </p>
    </div>
  );
};
export default Footer;
