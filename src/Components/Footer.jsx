import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import emailjs from "emailjs-com"; // Import EmailJS

const Footer = () => {
  const tech = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Success/Error Message
  const [isLoading, setIsLoading] = useState(false); // Loading State

  useEffect(() => {
    const typed = new Typed(tech.current, {
      strings: ["Subscribed", "Stay Tuned", "Be Updated", "Join Us"],
      startDelay: 100,
      typeSpeed: 50,
      backDelay: 50,
      backSpeed: 10,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }

    setIsLoading(true); // Show loading state

    const serviceId = "service_9xyfu95"; // Replace with your EmailJS Service ID
    const templateId = "template_p93u6s2"; // Replace with your EmailJS Template ID
    const publicKey = "fZXZ8Ga22lqnjAhws"; // Replace with your EmailJS Public Key

    const templateParams = {
      user_email: email, // This goes to the email template
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setMessage("✅ Thank you for subscribing! Check your inbox for confirmation.");
      setEmail(""); // Clear input after success
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("❌ Oops! Something went wrong. Please try again.");
    }

    setIsLoading(false); // Hide loading state
  };

  return (
    <div className="bg-white px-10 py-16 w-full">
      <div className="bg-black flex flex-col text-center justify-center pt-10 text-white">
        <div>
          <h1 className="text-3xl font-bold mb-5 text-orange-600">
            <span ref={tech}></span>
          </h1>
          <p>Sign up to receive periodic updates on news, prints, and projects.</p>

          <form onSubmit={handleSignUp} className="flex mt-7 justify-center space-x-3">
            <input
              type="email"
              className="bg-white px-4 py-2 border border-gray-300 rounded-md text-black w-64"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="text-orange-600 border-2 border-orange-600 px-4 py-2 rounded-md hover:bg-orange-600 hover:text-white transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "SIGN UP"}
            </button>
          </form>

          {message && <p className="mt-3 text-sm">{message}</p>}

          <p className="mt-5 mb-10">Your privacy will be respected.</p>
        </div>
      </div>
      <p className="mt-6 text-center">
        © 2024 The Best Is Back Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
