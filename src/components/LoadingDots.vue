<template>
  <div
    v-if="show"
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
  >
    <div class="lds-dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<style scoped>
/* Add any additional styles you need */
.lds-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  animation: lds-dots 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  margin: 0 6px; /* Adjust the spacing between dots */
}

@keyframes lds-dots {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
