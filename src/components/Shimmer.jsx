import React from "react";

const Shimmer = () => (
  <div className="w-full max-w-3xl mx-auto p-5 m-5 
    bg-gray-200 dark:bg-gray-700 
    rounded-xl shadow animate-pulse animate-fadeIn"
  >
    <div className="h-90 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
    <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
    <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded"></div>
    
  </div>
);

export default Shimmer;
