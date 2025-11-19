import React from "react";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className=
    "min-h-screen bg-gradient-to-l from-[#161d2d] to-[#899ab7]">

   
       <nav className="
       flex items-center
       justify-between px-10 py-5
        bg-gradient-to-r from-gray-900 to-gray-600
         p-6 rounded-lg text-white">
 
      <h1 className="text-3xl font-bold flex items-center gap-2">
        🚀 Startups Idea Voting Boards
      </h1>
 
      <div className="flex items-center gap-10 text-lg font-semibold">

   
        <button className="px-5 py-2 rounded-xl 
          hover:bg-white
           hover:text-black
            hover:shadow-[0_0_5px_#8a2be2,0_0_30px_#8a2be2]
            transition-all duration-300
            cursor-pointer">
          Home
        </button>

  
        <button className="px-5 py-2 rounded-xl 
          hover:bg-white
           hover:text-black
            hover:shadow-[0_0_5px_#8a2be2,0_0_30px_#8a2be2]
            transition-all duration-300
            cursor-pointer">
          About
        </button>

        <button className="px-5 py-2 rounded-xl 
          hover:bg-white
           hover:text-black
            hover:shadow-[0_0_5px_#8a2be2,0_0_30px_#8a2be2]
            transition-all duration-300
            cursor-pointer">
          Contact
        </button>

      </div>

    </nav>

  
      <HomePage />

  <footer className="bg-gradient-to-r from-gray-900 to-gray-600 text-white p-6">
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
