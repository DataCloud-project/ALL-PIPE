<template>
  <div class="navbar shadow-lg text-neutral-content flex">
    <router-link :to="{ name: 'home' }" class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> DataCloud Dashboard</span>
    </router-link>
    <div class="flex-none px-2">
      <router-link :to="{ name: 'register' }" class="">
        <span class="text-lg">Register</span>
      </router-link>
    </div>
    <div class="flex-none px-2">
      <router-link :to="{ name: 'home' }" class="">
        <span class="text-lg">Contact us</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #6667ab;
}
</style>
