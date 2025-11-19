import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        relative w-14 h-7 flex items-center 
        bg-gray-300 dark:bg-gray-700 
        rounded-full transition-all duration-300
      "
    >
      <span
        className={`
          absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md 
          transform transition-all duration-300
          ${dark ? "translate-x-7" : "translate-x-1"}
        `}
      />

      <span className="absolute left-1 text-yellow-500">
        {!dark && "☀️"}
      </span>

      <span className="absolute right-1">
        {dark && "🌙"}
      </span>
    </button>
  );
}
