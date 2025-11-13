import  React from 'react';
import './App.css'
import HomePage from "./pages/HomePage"; 

export default function App() {
  return (
    <div className='body-container'>
      <header>
        <h1 className='header'>🚀 Startup Idea Voting Board</h1>
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}


