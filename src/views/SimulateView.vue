<template>
  <iframe class="bg-pink-400 p-0" :src="simulateUrl">simulate</iframe>
</template>

<script setup lang="ts">
const simulateUrl = import.meta.env.VITE_SIMULATE_URL;
if (typeof simulateUrl !== "string") {
  throw new TypeError("VITE_SIMULATE_URL is not defined correctly");
}
</script>
