import "./index.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "vue-toastification/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import Keycloak from "keycloak-js";
import { createApp, getCurrentInstance, ref } from "vue";
import VueCookies from "vue-cookies";
import { createRouter, createWebHashHistory } from "vue-router";
// eslint-disable-next-line import/no-extraneous-dependencies
import Toast from "vue-toastification";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { IconPack } from "@fortawesome/fontawesome-svg-core";
import type { PluginOptions } from "vue-toastification";

// import keycloakConfig from "../keycloak-config.js";
import App from "./App.vue";

library.add(fas);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keycloak = new Keycloak({
  realm: "user-authentication",
  clientId: "def_frontend",
  url: "https://datacloud-auth.euprojects.net/auth",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// let loggedInUser = "undefined";
keycloak
  .init({
    onLoad: "check-sso",
    checkLoginIframe: true,
    redirectUri: window.location.href,
    flow: "implicit",
    silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    pkceMethod: "S256",
  })
  .then((auth) => {
    // console.log(auth);
    // console.log(keycloak.idTokenParsed);
    console.log("Keycloak authenticated: ");
    console.log(keycloak.authenticated);
    const maestroUser = keycloak.idTokenParsed?.maestro_username;
    const maestroPass = keycloak.idTokenParsed?.maestro_password;
    if (auth) {
      if (maestroUser) localStorage.setItem("kc_username", maestroUser);
      if (keycloak.idToken) localStorage.setItem("kc_token", keycloak.idToken);
      if (maestroUser) localStorage.setItem("currentLoggedUser", maestroUser);
      if (keycloak.idToken) localStorage.setItem("dcToken", keycloak.idToken);

      axios
        .post(
          "https://datacloud-dep.euprojects.net/dc/api/v1/datacloud/auth/login/dataclouddep",
          {
            username: maestroUser,
            password: maestroPass,
          }
        )
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((response) => {
          console.log(response.data);
          console.log("Success");

          const token = response.data;
          const expires = new Date();
          expires.setHours(expires.getHours() + 12);

          // eslint-disable-next-line max-len
          const cookieOptions = `expires=${expires.toUTCString()}; path=/; domain=euprojects.net; secure; samesite=none`;
          // eslint-disable-next-line unicorn/no-document-cookie, @typescript-eslint/restrict-template-expressions
          document.cookie = `auth_token=${token}; ${cookieOptions}`;
          // eslint-disable-next-line unicorn/no-document-cookie, @typescript-eslint/restrict-template-expressions
          document.cookie = `currentLoggedUser=${maestroUser}; ${cookieOptions}`;
          // eslint-disable-next-line unicorn/no-document-cookie, @typescript-eslint/restrict-template-expressions
          document.cookie = `dcToken=${keycloak.idToken}; ${cookieOptions}`;

          setTimeout(() => {
            const instance = getCurrentInstance();
            instance?.proxy?.$forceUpdate();
            // .$forceUpdate();
            window.location.reload();
          }, 50);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  })
  .catch((error) => {
    console.log(error);
  });

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
    // {
    //   path: "/login",
    //   name: "login",
    //   // meta: {
    //   //   title: "Login",
    //   // },
    //   component: () => import("./views/LoginView.vue"),
    // },
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isAuthenticated = ref(keycloak.authenticated);
const app = createApp(App);
app.config.globalProperties.$keycloak = keycloak;
app.config.globalProperties.$isAuthenticated = isAuthenticated;

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.use(Toast, options);
app.use(VueCookies);
app.mount("#app");
