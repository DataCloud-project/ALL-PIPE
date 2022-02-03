import "./index.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

createApp(App)
  .use(
    /* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
    createRouter({
      history: createWebHashHistory(),
      routes: [
        {
          path: "/",
          name: "home",
          component: () => import("./views/HomeView.vue"),
        },
        {
          path: "/discover",
          name: "discover",
          component: () => import("./views/DiscoverView.vue"),
        },
        {
          path: "/define",
          name: "define",
          component: () => import("./views/DefineView.vue"),
        },
        {
          path: "/simulate",
          name: "simulate",
          component: () => import("./views/SimulateView.vue"),
        },
        {
          path: "/provision",
          name: "provision",
          component: () => import("./views/ProvisionView.vue"),
        },
        {
          path: "/deploy",
          name: "deploy",
          component: () => import("./views/DeployView.vue"),
        },
        {
          path: "/adapt",
          name: "adapt",
          component: () => import("./views/AdaptView.vue"),
        },
      ],
    })
    /* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
  )
  .mount("#app");
