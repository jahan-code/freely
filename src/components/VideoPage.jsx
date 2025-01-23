import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import { APP_ID, SERVER_SECRET } from './constant';

const VideoPage = () => {
  const { roomID } = useParams(); // Get the room ID from the URL
  const videoContainerRef = useRef(null); // Reference to the container element
  const navigate = useNavigate(); // To navigate back if roomID is invalid
  const location = useLocation(); // To access query parameters
  
  

  // Get the password from the query string
  const queryParams = new URLSearchParams(location.search);
  const password = queryParams.get('password');

  useEffect(() => {

    if (!roomID || !password) {
      navigate('/'); // Redirect to home page if no room ID or password is provided
      return;
    }
    const initMeeting = async () => {
      try {
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          APP_ID, // Replace with your App ID from Zego
          SERVER_SECRET, // Replace with your Server Secret from Zego
          roomID,
          Date.now().toString(), // Unique User ID
          `${roomID}` // Random Display Name
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
          container: videoContainerRef.current,
          sharedLinks: [
            {
              name: 'Copy Link',
              url: `${window.location.protocol}//${window.location.host}/room/${roomID}?password=${password}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // Example: Group Call Mode
          },
          
        });

      } catch (error) {
        console.error('Error initializing meeting:', error);
      }
    };

    initMeeting();
  }, [navigate,roomID,password]);

  return (
    <div>
      <div ref={videoContainerRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};

export default VideoPage;
