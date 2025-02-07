import React, { useState } from "react";
import emailjs from "emailjs-com";

const HireModal = ({ showModal, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceId = "service_9xyfu95"; // Replace with your actual service ID from EmailJS
    const templateId = "template_g6kv357"; // Replace with your actual template ID from EmailJS
    const userId = "fZXZ8Ga22lqnjAhws"; // Replace with your public key from EmailJS
  
    // Pass form data with correct keys matching the EmailJS template variables
    const templateParams = {
      name: formData.name,     // Must match the variable in your EmailJS template
      email: formData.email,   // Must match the variable in your EmailJS template
      message: formData.message // Must match the variable in your EmailJS template
    };
  
    emailjs
      .send(serviceId, templateId, templateParams, userId) // Send templateParams instead of formData
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Thank you for reaching out! I will get back to you soon.");
          closeModal(); // Close the modal on success
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };
  

  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
          <button
            onClick={closeModal}
            className="mt-4 text-red-500"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default HireModal;
