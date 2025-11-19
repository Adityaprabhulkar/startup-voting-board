import React from "react";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className=
    "min-h-screen bg-gradient-to-l from-[#161d2d] to-[#899ab7] ">

   
       <nav className="w-full bg-gradient-to-r from-[#0c0f17] to-[#4c5669] text-white px-6 py-4 shadow-md">
 
      <h1 className="
          text-4xl font-bold text-white drop-shadow-[3px_3px_0px_black]
          animate-slideInLeft
        ">
        🚀 Startup Idea Voting Board
      </h1>

 
      <div className="flex items-evenly space-x-1 text-lg justify-end animate-slideInRight">

      
        <button className="px-5 py-2 rounded-xl 
          hover:bg-gray-300
           hover:text-black
            hover:shadow-[0_0_5px_#8a2be2,0_0_30px_#8a2be2]
            transition-all duration-300
            cursor-pointer">
          Home
        </button>

  
        <button className="px-5 py-2 rounded-xl 
          hover:bg-gray-300
           hover:text-black
            hover:shadow-[0_0_5px_#8a2be2,0_0_30px_#8a2be2]
            transition-all duration-300
            cursor-pointer">
          About
        </button>

        <button className="px-5 py-2 rounded-xl 
          hover:bg-gray-300
           hover:text-black
            hover:shadow-[0_0_5px_#8a2be2,0_0_30px_#8a2be2]
            transition-all duration-300
            cursor-pointer">
          Contact
        </button>

      </div>

    </nav>

  
      <HomePage />

  <footer className="bg-gradient-to-r from-gray-900 to-gray-500 text-white p-6">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">


    <div>
      <h2 className="text-xl font-bold mb-2">🚀 Startup Voting Board</h2>
      <p className="text-gray-400 text-sm">
        Vote and discover top startup ideas built by the community.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="#home"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-300 hover:text-purple-400 transition-all duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>

 
    <div>
      <h3 className="text-lg font-semibold mb-3">Connect</h3>
      <ul className="space-y-2">
        <li className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer">
          📧 support@startupboard.com
        </li>
        <li className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer">
          📍 Mumbai, India
        </li>
        <li className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer">
          💼 LinkedIn
        </li>
      </ul>
    </div>
  </div>

 
  <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Startup Idea Voting Board. All rights reserved.
  </div>
</footer>

    </div>
  );
}
