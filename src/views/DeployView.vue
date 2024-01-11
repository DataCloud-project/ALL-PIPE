<template>
  <div class="p-0">
    <iframe
      src="https://datacloud-dep.euprojects.net/"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  mounted() {
    const reloadParameter = this.$route.query.reload;

    if (reloadParameter === "true") {
      // Force a reload for the current route
      this.$location.reload();
      window.location.reload();
    }
  },
};
</script>
