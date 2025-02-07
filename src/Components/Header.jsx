import { useState } from "react";
import { NavLink } from "react-router-dom";
import HireModal from "./HireModal"; // Import the Hire Me modal

const Header = () => {
  const brandName = "Tek Raj Naunyal";

  const [menuLinks] = useState([
    { title: "Home", link: "/home", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Skill", link: "/skill", id: 3 },
    { title: "Services", link: "/services", id: 4 },
    { title: "Contact", link: "/contact", id: 5 },
  ]);

  const [showModal, setShowModal] = useState(false); // State for Hire Modal

  return (
    <>
      {/* Header Section */}
      <div className="header">
        {/* Brand Name */}
        <div>
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {menuLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                `hover:text-orange-400 ${isActive ? "text-orange-500 font-semibold" : ""}`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Hire Me Button */}
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 bg-black shadow-xl rounded-full text-white font-medium hover:bg-orange-500 transition"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Hire Me Modal */}
      <HireModal showModal={showModal} closeModal={() => setShowModal(false)} />
    </>
  );
};

export default Header;
