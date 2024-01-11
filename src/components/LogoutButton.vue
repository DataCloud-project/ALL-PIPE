<template>
  <button @click="logout">
    <span class="text-lg">Logout</span>
  </button>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("kc_token");
      localStorage.removeItem("kc_username");
      this.clearCookie("auth_token", "euprojects.net");

      this.$keycloak
        .logout({ redirectUri: "https://datacloud-toolbox.euprojects.net/#/" })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Logout failed", error);
        });
    },
    clearCookie(cookieName, domain) {
      // eslint-disable-next-line unicorn/no-document-cookie, @typescript-eslint/restrict-template-expressions, max-len
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    },
  },
};
</script>
