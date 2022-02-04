import "./index.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";

/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Home",
      },
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
});
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */

// Quick and Dirty way to set the page title
// Will use the meta title if it exists, the route name otherwise,
// and finally unknown as default
router.beforeEach((to, from, next) => {
  document.title = `${
    typeof to.meta?.title === "string"
      ? to.meta.title
      : typeof to.name === "string"
      ? to.name.charAt(0).toUpperCase() + to.name.slice(1)
      : "Unknown"
  } - DataCloud ALL-PIPE`;
  next();
});

createApp(App).use(router).mount("#app");
