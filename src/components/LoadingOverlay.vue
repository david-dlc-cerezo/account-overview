<template>
  <div id="loading-overlay" v-if="loading">
    <p>Loading<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></p>
  </div>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  props: {
    loading: Boolean
  }
}
</script>

<style scoped>
  #loading-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  #loading-overlay p {
    color: #fff;
    font-size: 2em;
    text-align: center;
    position: relative;
    top: 50%;
  }

  @keyframes blink {
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  }

  #loading-overlay .dot {
    font-size: 2em;
    animation-name: blink;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  #loading-overlay .dot:nth-child(2) {
      animation-delay: .4s;
  }

  #loading-overlay .dot:nth-child(3) {
      animation-delay: .8s;
  }
</style>
