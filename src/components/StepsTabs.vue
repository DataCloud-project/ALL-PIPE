<template>
  <div class="btn-group flex shadow-lg bg-gray-700">
    <div class="btn grow flex border-0 rounded-none mr-0">
      <div class="grow" @click="redirect('discover')">Discover</div>
      <button class="mr-0" @click="openNewTab('discover')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div class="btn grow flex border-0 rounded-none mr-0">
      <div class="grow" @click="redirect('define')">Define</div>
      <button class="mr-0" @click="openNewTab('define')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div class="btn grow flex border-0 rounded-none mr-0">
      <div class="grow" @click="redirect('simulate')">Simulate</div>
      <button class="mr-0" @click="openNewTab('simulate')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div class="btn grow flex border-0 rounded-none mr-0">
      <div class="grow" @click="redirect('provision')">Provision</div>
      <button class="mr-0" @click="openNewTab('provision')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div class="btn grow flex border-0 rounded-none mr-0">
      <div class="grow" @click="redirect('schedule')">Schedule</div>
      <button class="mr-0" @click="openNewTab('schedule')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
    <div class="btn grow flex border-0 rounded-none mr-0">
      <div class="grow" @click="redirect('deploy')">Deploy</div>
      <button class="mr-0" @click="openNewTab('deploy')">
        <font-awesome-icon :icon="['fas', 'external-link']" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirect(path) {
      this.$router.push({ name: path });
    },
    openNewTab(index) {
      switch (index) {
        case "discover":
          window.open("http://94.177.218.70:7778/");
          break;
        case "define":
          window.open("https://pipelinedesign.azurewebsites.net/");
          break;
        case "simulate":
          window.open("https://simpipe.sct.sintef.no/");
          break;
        case "provision":
          window.open("https://rmarket.sintef.cloud/");
          break;
        case "schedule":
          window.open("http://194.182.187.139:5000/pipelines");
          break;
        default:
          window.open("https://datacloud-dep.euprojects.net/");
      }
    },
  },
};
</script>
