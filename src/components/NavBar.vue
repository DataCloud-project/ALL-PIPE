<template>
  <div class="navbar shadow-lg text-neutral-content flex items-center">
    <router-link :to="{ name: 'home' }">
      <span class="text-lg font-bold">
        <img
          src="../assets/datacloud.png"
          alt="DataCloud Logo"
          class="logo-image"
        />
      </span>
    </router-link>

    <router-link :to="{ name: 'deploy' }" class="px-2 mx-2">
      <span class="text-lg font-bold"> DataCloud Dashboard</span>
    </router-link>

    <div class="ml-auto mr-4 flex space-x-2">
      <div>
        <login-button
          :username="computedUsername"
          :disabled="lockLogin"
        ></login-button>
      </div>
      <div>
        <logout-button v-if="lockLogin"></logout-button>
      </div>
      <div>
        <router-link :to="{ name: 'register' }">
          <span class="text-lg">Register</span>
        </router-link>
      </div>
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
