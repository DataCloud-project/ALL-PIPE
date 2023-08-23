import "./index.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "vue-toastification/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// eslint-disable-next-line import/no-extraneous-dependencies
import Toast from "vue-toastification";
import type { PluginOptions } from "vue-toastification";

import App from "./App.vue";

library.add(fas);

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
      path: "/register",
      name: "register",
      // meta: {
      //   title: "Register",
      // },
      component: () => import("./views/RegisterView.vue"),
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
      path: "/schedule",
      name: "schedule",
      component: () => import("./views/ScheduleView.vue"),
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
const options: PluginOptions = {
  // You can set your default options here
};
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(Toast, options)
  .mount("#app");
