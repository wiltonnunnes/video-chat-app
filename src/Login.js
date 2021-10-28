import React from 'react';
import './App.css';
import { mdiVideo } from '@mdi/js';
import Icon from './components/Icon';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stream: null
    };

    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();
    this.startCameraPreview = this.startCameraPreview.bind(this);
  }

  componentDidMount() {
    let constraints = { video: true };
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      const video = this.videoRef.current;
      video.srcObject = stream;
      video.play();
    }).catch(function(err) {
      console.log(err);
    });
  }

  startCameraPreview() {
    this.videoRef.current.play();
  }

  render() {
    return (
      <>
        <video 
          ref={this.videoRef} 
          //onCanPlay={this.startCameraPreview} 
          width="480" 
          height="270"
        />
        <Icon 
          path={mdiVideo} 
          size={24}
        />
      </>
    );
  }
};

export default Login;