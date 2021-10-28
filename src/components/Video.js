import React, { useRef, useEffect } from 'react';
import styles from './Video.module.css';

const Video = React.forwardRef((props, ref) => {
  const { className } = props;

  return (
    <div className={className}>
      <video  
        ref={ref} 
        autoPlay 
        className={styles.video}
      />
    </div>
  );
});

export default Video;