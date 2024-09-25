<template>
  <div id="app">
    <h1>Custom Video Player</h1>
    <VideoPlayer />
  </div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer.vue';

export default {
  components: {
    VideoPlayer,
  },
};
</script>

<style>
#app {
  text-align: center;
}

h1 {
  color: #2c3e50;
}
</style>
