import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

export default function App() {
  const [open, setOpen] = useState(false);

  

  return (
    <div className="bg-[#cebbdb] min-h-screen">
      

   
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
        
        
        <h1 className="text-xl font-bold flex items-center gap-2">
          🚀 Startup Idea Voting Board
        </h1>

        
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul
  className={`
    flex flex-col lg:flex-row lg:items-center lg:gap-6 
    absolute lg:static right-6 top-16 bg-gray-900 rounded-lg p-4 lg:p-0 transition-all duration-300
    ${open ? "block" : "hidden lg:flex"}
  `}
>

  <li>
    <a
      href="#"
      className="
        px-4 py-2 rounded-md 
        text-white font-medium 
        hover:bg-purple-600 
        hover:scale-105 
        transition-all duration-300 
        no-underline 
      "
      style={{ textDecoration: "none" }}
    >
      Home
    </a>
  </li>

  
  <li>
    <a
      href="#"
      className="
        px-4 py-2 rounded-md 
        text-white font-medium 
        hover:bg-purple-600 
        hover:scale-105 
        transition-all duration-300 
        no-underline
      "
      style={{ textDecoration: "none" }}
    >
      About
    </a>
  </li>

  
  <li>
    <a
      href="#"
      className="
        px-4 py-2 rounded-md 
        text-white font-medium 
        hover:bg-purple-600 
        hover:scale-105 
        transition-all duration-300 
        no-underline
      "
      style={{ textDecoration: "none" }}
    >
      Contact
    </a>
  </li>
</ul>

      </nav>

    
      <main>
        <HomePage />
      </main>

    </div>
  );
}
