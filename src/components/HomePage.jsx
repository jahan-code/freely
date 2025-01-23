import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToRoom = () => {
    navigate('/create-room');
  };

  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <div className="mb-6">
          <img 
            src="./images/freely.jpg" // Replace with your logo file path or URL
            alt="Video Rooms Logo"
            className="mx-auto w-24 h-24" // Adjust size as needed
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Video Rooms</h1>
        <button
          onClick={navigateToRoom}
          className="w-full bg-green-500 text-white py-3 rounded-lg mb-4 hover:bg-blue-600 transition"
        >
          Create or Join Here!!
        </button>
      </div>
    </div>
  );
};

export default HomePage;
