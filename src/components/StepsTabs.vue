<template>
  <div class="btn-group flex shadow-lg bg-gray-700">
    <div
      class="btn grow flex border-0 rounded-none mr-0"
      :style="getColor('discover')"
    >
      <div class="grow py-4" @click="redirect('discover')">Discover</div>
      <button class="mr-0" @click="openNewTab('discover')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div
      class="btn grow flex border-0 rounded-none mr-0"
      :style="getColor('define')"
    >
      <div class="grow py-4" @click="redirect('define')">Define</div>
      <button class="mr-0" @click="openNewTab('define')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div
      class="btn grow flex border-0 rounded-none mr-0"
      :style="getColor('simulate')"
    >
      <div class="grow py-4" @click="redirect('simulate')">Simulate</div>
      <button class="mr-0" @click="openNewTab('simulate')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div
      class="btn grow flex border-0 rounded-none mr-0"
      :style="getColor('provision')"
    >
      <div class="grow py-4" @click="redirect('provision')">Provision</div>
      <button class="mr-0" @click="openNewTab('provision')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div
      class="btn grow flex border-0 rounded-none mr-0"
      :style="getColor('schedule')"
    >
      <div class="grow py-4" @click="redirect('schedule')">Schedule</div>
      <button class="mr-0" @click="openNewTab('schedule')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div
      class="btn grow flex border-0 rounded-none mr-0"
      :style="getColor('deploy')"
    >
      <div class="grow py-4" @click="redirect('deploy')">Deploy</div>
      <button class="mr-0" @click="openNewTab('deploy')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";

export default {
  methods: {
    redirect(path) {
      this.$router.push({ name: path });
    },
    openNewTab(index) {
      switch (index) {
        case "discover":
          window.open("https://datacloud-dis.euprojects.net");
          break;
        case "define":
          window.open("https://datacloud-def.euprojects.net");
          break;
        case "simulate":
          window.open("https://datacloud-sim.euprojects.net");
          break;
        case "provision":
          window.open("https://datacloud-market.euprojects.net");
          break;
        case "schedule":
          window.open("https://datacloud-ada.euprojects.net");
          break;
        default:
          window.open("https://datacloud-dep.euprojects.net/");
      }
    },
    getColor(index) {
      const route = useRoute();
      console.log(route.path);
      if (route.path.includes(index)) {
        return "background-color: green";
      }
      return "";
    },
  },
};
</script>
