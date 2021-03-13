import React, { useEffect, useState, useRef } from 'react';

const Login = () => {

  const [videoStream, setVideoStream] = useState(null);

  const videoRef = useRef(null);

  useEffect(() => {
    let constraints = { video: true };
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      setVideoStream(stream);
      videoRef.current.srcObject = stream;
    })
    .catch(function(err) {

    });
  }, []);

  return (
    <video 
      ref={videoRef} 
      onCanPlay={() => videoRef.current.play()}
    />
  );
};

export default Login;