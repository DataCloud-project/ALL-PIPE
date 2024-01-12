<template>
  <!-- Landing section with background -->
  <div class="landing-section">
    <!-- <div class="centered-content"> -->
    <div class="container">
      <div class="row">
        <p class="main-text centered-content">
          Enabling the big data pipeline lifecycle on the computing continuum
        </p>
      </div>
      <div class="row">
        <p class="secondary-text centered-content">
          DataCloud develops novel methods to support the complete lifecycle of
          Big Data pipelines processing, enabling their discovery, definition,
          model-based analysis and optimization, simulation, deployment,
          adaptive run-time and monitoring on top of decentralized heterogeneous
          infrastructures on the Computing Continuum.
        </p>
        <p class="secondary-text centered-content">
          DataCloud delivers a toolbox of new languages, methods,
          infrastructures, and prototypes for discovering, simulating,
          deploying, and adapting Big Data pipelines on heterogeneous and
          untrusted resources. DataCloud separates the design from the run-time
          aspects of Big Data pipeline deployment, empowering domain experts to
          take an active part in their definitions. Its aim is to lower the
          technological entry barriers for the incorporation of Big Data
          pipelines in organizations’ business processes and make them
          accessible to a wider set of stakeholders regardless of the hardware
          infrastructure.
        </p>
        <p class="secondary-text centered-content">
          Join the DataCloud Toolbox here Learn how to use DataCloud:
          <a
            href="https://datacloud-h2020-documentation.readthedocs.io"
            class="text-white"
            >https://datacloud-h2020-documentation.readthedocs.io</a
          >
        </p>
      </div>
    </div>
  </div>
  <!-- </div> -->

  <div class="divider-section">
    <h2>DataCloud Tools</h2>
  </div>

  <div class="px-5">
    <div class="row align-items-md-stretch">
      <div class="col-md-2">
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
            @click="
              redirectToExternalLink('https://datacloud-dis.euprojects.net')
            "
          >
            Select
          </button>
        </div>
      </div>
      <div class="col-md-2">
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
            @click="
              redirectToExternalLink('https://datacloud-def.euprojects.net')
            "
          >
            Select
          </button>
        </div>
      </div>

      <div class="col-md-2">
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
            @click="
              redirectToExternalLink('https://datacloud-sim.euprojects.net')
            "
          >
            Select
          </button>
        </div>
      </div>
      <div class="col-md-2">
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
            @click="
              redirectToExternalLink(
                'https://r-market.westeurope.cloudapp.azure.com:5555/dashboard'
              )
            "
          >
            Select
          </button>
        </div>
      </div>

      <div class="col-md-2">
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
            @click="
              redirectToExternalLink('https://datacloud-ada.euprojects.net')
            "
          >
            Select
          </button>
        </div>
      </div>
      <div class="col-md-2">
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
            @click="
              redirectToExternalLink('https://datacloud-dep.euprojects.net')
            "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="contactus-section">
    <div>
      <h6>Contact Us</h6>
      <br />
      <p>
        <font-awesome-icon :icon="['fas', 'envelope']" />&nbsp; https://datacloudproject.eu/contacts
      </p>
    </div>
  </div>
  <div class="footer-section">
    <img src="../assets/europeanlogo.svg" alt="Europe Logo" />

    <h6>
      This project has received funding from the European Union's Horizon 2020
      research and innovation programme under grant agreement No 101016835
    </h6>
  </div>
</template>
<script>
export default {
  methods: {
    redirect(path) {
      this.$router.push({ name: path });
    },
    redirectToExternalLink(externalUrl) {
      window.open(externalUrl, "_blank");
    },
  },
};
</script>

<style scoped>
@import "bootstrap/dist/css/bootstrap.css";
@import "bootstrap-vue/dist/bootstrap-vue.css";

.landing-section {
  height: 69vh;
  background-image: url("../assets/landing.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-text {
  font-size: xx-large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #fff;
  margin-bottom: 10%;
}

.secondary-text {
  font-size: x-large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #fff;
  /* margin-left: 25%; */
  /* margin-right: 25%; */
}

.centered-content {
  text-align: center;
}

.divider-section {
  text-align: center;
  padding: 30px;
  background-color: #eee;
  margin-bottom: 24px;
}

.divider-section h2 {
  font-size: 34px;
  color: #000;
}

.contactus-section {
  margin-top: 144px;
  background-color: #292828;
  color: #ede4e4;
  padding: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-section {
  /* margin-top: 144px; */
  background-color: #292828;
  color: #ede4e4;
  padding: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
