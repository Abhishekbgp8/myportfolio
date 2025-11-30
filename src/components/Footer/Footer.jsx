import React from "react";
import {FaTwitter, FaLinkedin,FaPhone } from "react-icons/fa";
import ScrollingTicker from "../ScrollingTicker/ScrollingTicker";

const Footer = () => {
  // Footer no longer contains internal navigation links; no handleScroll needed.

  return (
    <footer className="text-white py-4 px-0">
      <div className="w-full text-center">
        {/* ScrollingTicker moved to be a regular last section in App.jsx */}
        {/* Footer has no internal navigation links per request */}

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-3">
          {[
          
            { icon: <FaTwitter />, link: "https://twitter.com/AbhishekOnCode" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abhishek-kumar-jsr"},
            { icon: <FaPhone />, link: "tel:+91754713556" }
           
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-3">
          © 2025 Abhishek Kumar. All rights reserved.
        </p>
        <div className="mt-2">
          <ScrollingTicker
            direction="right"
            fixed={false}
            speed={220}
            gap={48}
            itemGap={96}
            ariaHidden={true}
            items={[
              "College Fest Robo Race winner",
              "Robo Pick & Place winner",
              "Robo Line Follower winner",
              "Coding Club member",
              "Tech Fest organiser",
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
