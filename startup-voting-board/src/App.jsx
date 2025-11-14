import  React from 'react';
import './App.css'
import HomePage from "./pages/HomePage"; 

export default function App() {
  return (
    <div cclassName="bg-[#cebbdb]">
      <header>
        <h1 className="p-2.5 m-4 text-4xl font-bold">🚀 Startup Idea Voting Board</h1>
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}


