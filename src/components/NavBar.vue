<template>
  <div class="navbar shadow-lg text-neutral-content flex">
    <img
      src="../assets/datacloud.png"
      alt="DataCloud Logo"
      class="logo-image"
    />
    <router-link :to="{ name: 'home' }" class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> DataCloud Dashboard</span>
    </router-link>
    <div class="flex-none px-2">
      <login-button
        :username="computedUsername"
        :disabled="lockLogin"
      ></login-button>
    </div>
    <div class="flex-none px-2">
      <logout-button v-if="lockLogin"></logout-button>
    </div>
    <div class="flex-none px-2">
      <router-link :to="{ name: 'register' }" class="">
        <span class="text-lg">Register</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import LoginButton from "./LoginButton.vue";
import LogoutButton from "./LogoutButton.vue";

export default {
  components: {
    LoginButton,
    LogoutButton,
  },
  data: () => ({ lockLogin: false }),
  computed: {
    computedUsername() {
      const username = localStorage.getItem("kc_username") || "Login";
      if (username !== "Login") {
        this.disableLogin();
      } else {
        this.enableLogin();
      }
      return username;
    },
  },
  methods: {
    disableLogin() {
      this.lockLogin = true;
    },
    enableLogin() {
      this.lockLogin = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #6667ab;
}
.logo-image {
  max-width: 200px; /* Adjust the size as needed */
  height: auto;
}
</style>
