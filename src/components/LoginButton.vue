<template>
  <button @click="login">
    <span class="text-lg">{{ username ? username : "Login" }}</span>
  </button>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    username: String,
  },
  methods: {
    login() {
      console.log("Trying to login");
      this.$keycloak
        .login({
          redirectUri:
            "https://datacloud-toolbox.euprojects.net/#/deploy?reload=true",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Login failed", error);
        });
    },
    redirect(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>
