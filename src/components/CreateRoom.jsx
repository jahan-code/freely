import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Room = () => {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isCreatingRoom, setIsCreatingRoom] = useState(false); // To toggle between creating and joining

  const handleRoomAction = () => {
    if (roomName && password) {
      const roomId = roomName.toLowerCase().replace(/\s+/g, '-'); // Room ID
      if (isCreatingRoom) {
        // Logic for creating room (can include API call to create the room on a server, etc.)
        navigate(`/room/${roomId}?password=${password}`); // Navigate to the created room
      } else {
        // Logic for joining an existing room (e.g., validating if the room exists)
        navigate(`/room/${roomId}?password=${password}`); // Navigate to the existing room
      }
    } else {
      setError('Please enter both room name and password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
         Create or Join a Room
        </h1>
        <input
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          type="text"
          placeholder="Enter room name..."
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter room password..."
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleRoomAction}
          className={`w-full ${isCreatingRoom ? 'bg-blue-500' : 'bg-green-500'} text-white py-3 rounded-lg hover:bg-opacity-80 transition`}
        >
          Next
        </button>
        

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Room;
