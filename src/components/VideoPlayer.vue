<template>
    <div class="video-player">
      <video
        ref="video"
        class="video"
        :src="videoSrc"
        @timeupdate="handleProgress"
        controls="false"
      ></video>
  
      <div class="controls">
        <button @click="togglePlayPause">
          {{ isPlaying ? 'Pause' : 'Play' }}
        </button>
        <input
          type="range"
          v-model="progress"
          @input="handleSeek"
          class="progress-bar"
        />
        <div class="volume-control">
          <label>Volume: </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            v-model="volume"
            @input="handleVolumeChange"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPlaying: false,
        progress: 0,
        volume: 1,
        videoSrc: "C:\Users\vivek\Downloads\Justin Bieber - Peaches ft. Daniel Caesar, Giveon.mp4"
      };
    },
    methods: {
      togglePlayPause() {
        const video = this.$refs.video;
        if (this.isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        this.isPlaying = !this.isPlaying;
      },
      handleProgress() {
        const video = this.$refs.video;
        this.progress = (video.currentTime / video.duration) * 100;
      },
      handleSeek(event) {
        const video = this.$refs.video;
        const seekTime = (event.target.value / 100) * video.duration;
        video.currentTime = seekTime;
      },
      handleVolumeChange(event) {
        const video = this.$refs.video;
        video.volume = this.volume;
      },
    },
  };
  </script>
  
  <style scoped>
  .video-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 20px auto;
  }
  
  .video {
    width: 100%;
    height: auto;
    border: 2px solid #000;
  }
  
  .controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #f00;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #d00;
  }
  
  .progress-bar {
    width: 50%;
    margin-left: 10px;
  }
  
  .volume-control {
    display: flex;
    align-items: center;
  }
  
  .volume-control input {
    margin-left: 10px;
  }
  </style>  