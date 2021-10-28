import React, { useEffect, useRef, useState } from 'react';
import { mdiVideo } from '@mdi/js';
import Icon from './components/Icon';
import './App.css';
import Video from './components/Video';
import IconButton from './components/IconButton';

function App() {
  const videoRef = useRef(null);

  const playCameraPreview = () => videoRef.current.play();

  useEffect(() => {
    let constraints = { video: true };
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      const video = videoRef.current;
      video.srcObject = stream;
    }).catch(function(err) {
      console.log(err);
    });
  }, []);

  return (
    <div className="container">
      <div 
        className="header"
      />
      <div className="participants">
        <Video 
          ref={videoRef} 
          className="video"
        />
      </div>
      <div className="controls">
        <IconButton 
          path={mdiVideo}
        />
      </div>
    </div>
  );
}

export default App;
