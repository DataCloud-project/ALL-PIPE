<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import StepsTabs from "./components/StepsTabs.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <StepsTabs />

    <div class="box p-4 flex-grow">
      <router-view />
    </div>
  </div>
</template>
