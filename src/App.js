
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';
import CreateRoom from './components/CreateRoom'; // Matches CreateRoom.jsx


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/create-room',
      element: <CreateRoom />
    },
    {
      path: '/room/:roomID',
      element: <VideoPage />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
