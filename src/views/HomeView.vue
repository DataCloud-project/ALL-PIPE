<template>
  <div class="px-5">
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div
          class="h-100 p-5 text-white border rounded-3"
          style="background-color: #eee"
        >
          <h2>DIS-PIPE (Discovery pipeline tool)</h2>
          <p>
            DIS-PIPE provides scalable integration of process mining techniques
            and artificial intelligence algorithms to learn the structure of Big
            Data pipelines by extracting, processing and interpreting vast
            amounts of event data collected from several data sources.
            Furthermore, DIS-PIPE supports a variety of analytics techniques for
            visualising the discovered pipelines together with detailed
            diagnostics information about their execution.
          </p>
          <button
            class="btn btn-success"
            type="button"
            @click="redirect('discover')"
          >
            Select
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="h-100 p-5 text-white border rounded-3"
          style="background-color: #eee"
        >
          <h2>DEF-PIPE (Definition pipeline tool)</h2>
          <p>
            DEF-PIPE provides a visual design for domain experts to implement
            Big Data pipelines based on a DSL, including means to store and load
            the pipeline definitions. Furthermore, it enables data scientists to
            define the pipelines by configuring each step, injecting code, or
            customising predefined generic templates.
          </p>
          <button
            class="btn btn-success"
            type="button"
            @click="redirect('define')"
          >
            Select
          </button>
        </div>
      </div>
    </div>

    <div class="row align-items-md-stretch" style="margin-top: 2em">
      <div class="col-md-6">
        <div
          class="h-100 p-5 text-white border rounded-3"
          style="background-color: #eee"
        >
          <h2>SIM-PIPE (Simulation pipeline tool)</h2>
          <p>
            SIM-PIPE simulates the pipeline execution and provides final
            deployment configurations that conform to the hardware requirements.
            SIM-PIPE also provides testing functionalities, such as a sandbox
            for evaluating the performance of individual pipeline steps and
            statistical analysis of the performance of the overall pipeline.
          </p>
          <button
            class="btn btn-success"
            type="button"
            @click="redirect('simulate')"
          >
            Select
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="h-100 p-5 text-white border rounded-3"
          style="background-color: #eee"
        >
          <h2>R-MARKET (Provision through resource marketplace)</h2>
          <p>
            R-MARKET deploys a decentralised hybrid permissioned and
            permissionless blockchain network that federates a vast set of
            heterogeneous resources from various providers spread across the
            Computing Continuum. R-MARKET creates a democratic marketplace of
            trustworthy resources and enables transparent provisioning over
            multiple control and network domains for external use.
          </p>
          <button
            class="btn btn-success"
            type="button"
            @click="redirect('provision')"
          >
            Select
          </button>
        </div>
      </div>
    </div>

    <div class="row align-items-md-stretch" style="margin-top: 2em">
      <div class="col-md-6">
        <div
          class="h-100 p-5 text-white border rounded-3"
          style="background-color: #eee"
        >
          <h2>ADA-PIPE (Sceduling and adaption pipeline tool)</h2>
          <p>
            ADA-PIPEprovides a data-aware algorithm for optimised and adaptable
            scheduling across the Computing Continuum with infrastructure drift
            adaptation capability. ADA-PIPE allows dynamic resource
            reconfiguration for improved performance and SLO fulfilment.
          </p>
          <button
            class="btn btn-success"
            type="button"
            @click="redirect('schedule')"
          >
            Select
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="h-100 p-5 text-white border rounded-3"
          style="background-color: #eee"
        >
          <h2>DEP-PIPE (Deployment pipeline tool)</h2>
          <p>
            DEP-PIPE enables flexible and scalable deployment and orchestration
            of Big Data pipelines over the Computing Continuum resources.
            DEP-PIPE monitors the pipeline execution and provides online SLO
            metrics to the other tools.
          </p>
          <button
            class="btn btn-success"
            type="button"
            @click="redirect('deploy')"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirect(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>

<style scoped>
@import "bootstrap/dist/css/bootstrap.css";
@import "bootstrap-vue/dist/bootstrap-vue.css";
</style>
