import React, { useRef, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume to 100%

  // Toggle Play/Pause
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle Progress Update
  const handleProgress = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  // Seek Through Video
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };
  
  return (
    <div className="video-player">
      <video
        ref={videoRef}
        onTimeUpdate={handleProgress}
        className="video"
        src= "C:\Users\vivek\Downloads\'MH' - The Godfather Theme (TRAP) [Trap].mp4"
        controls={false}
      ></video>
      
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          className="progress-bar"
        />
        
        {/* Volume Control */}
        <div className="volume-control">
          <label>Volume: </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;


