<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import StepsTabs from "./components/StepsTabs.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <StepsTabs />

    <router-view class="box p-4 flex-grow" />
  </div>
</template>

<style>
iframe {
  border: none;
  height: 100vh;
  width: 100%;
}
</style>
