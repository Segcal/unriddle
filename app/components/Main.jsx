import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";


export default function Main() {
  return (
    <div className="w-full  h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
        <div>
          <p className="uppercase text-sm text-gray-600 tracking-widest">
            Let s build somthing unique together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi im <span className="text-[#5651e5]">Caleb</span>
          </h1>
          <h1 className="py-1 text-gray-700">Am a Frontend Developer</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            Caleb is proficient in React & Next.js popular JavaScript library,
            for building user interfaces. He leverages the component-based
            architecture of React to create modular and reusable UI elements,
            promoting code efficiency and maintainability.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500 ease-in">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500 ease-in">
              <FaFacebook />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500 ease-in">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500 ease-in">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
