import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 transition-colors duration-300">
        
        {/* Logo */}
        <h1 className="text-xl font-bold flex items-center gap-2">
          🚀 Startup Idea Voting Board
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Theme Toggle — inside navbar */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        {/* Menu */}
        <ul
          className={`
            flex flex-col lg:flex-row lg:items-center lg:gap-6 
            absolute lg:static right-6 top-16
            bg-white dark:bg-gray-800
            rounded-lg p-4 lg:p-0 transition-all duration-300

            ${open ? "block" : "hidden"}   /* 🔥 important fix */
            lg:block
          `}
        >
          <li>
            <a className="px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-all duration-300">
              Home
            </a>
          </li>

          <li>
            <a className="px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-all duration-300">
              About
            </a>
          </li>

          <li>
            <a className="px-4 py-2 rounded-md hover:bg-purple-600 hover:scale-105 transition-all duration-300">
              Contact
            </a>
          </li>

          {/* Theme toggle for mobile */}
          <div className="lg:hidden mt-3">
            <ThemeToggle />
          </div>

        </ul>
      </nav>

      {/* Main page content */}
      <main className="p-6 dark:text-white">
        <HomePage />
      </main>
    </div>
  );
}
