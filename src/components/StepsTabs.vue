<template>
  <div class="btn-group flex shadow-lg bg-gray-700">
    <router-link
      :to="{ name: 'discover' }"
      class="btn grow border-0 rounded-none"
      active-class="bg-green-700"
    >
      Discover
    </router-link>
    <router-link
      :to="{ name: 'define' }"
      class="btn grow border-0"
      active-class="bg-green-600"
    >
      Define
    </router-link>
    <router-link
      :to="{ name: 'simulate' }"
      class="btn grow border-0"
      active-class="bg-yellow-600"
    >
      Simulate
    </router-link>
    <router-link
      :to="{ name: 'provision' }"
      class="btn grow border-0"
      active-class="bg-yellow-600"
    >
      Provision
    </router-link>
    <router-link
      :to="{ name: 'deploy' }"
      class="btn grow border-0"
      active-class="bg-orange-700"
    >
      Deploy
    </router-link>
    <router-link
      :to="{ name: 'adapt' }"
      class="btn grow border-0 rounded-none"
      active-class="bg-orange-700"
    >
      Adapt
    </router-link>
  </div>
</template>
