<template>
  <div class="flex items-start pt-16 justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-full sm:w-96">
      <h2 class="text-2xl font-semibold mb-4">Datacloud Login</h2>

      <!-- <div class="loader" :class="{ loading: loading }"></div> -->
      <!-- <div class="container align-center">
        <h1 class="text-h4 font-weight-bold">Login</h1>
        <h2 class="text-h5 font-weight-bold">Login</h2>
      </div> -->
      <!-- <div v-if="errorSummary !== null" class="alert error">
        {{ errorSummary }}
      </div> -->
      <form class="form" @submit.prevent="login">
        <div class="mb-4 mt-2">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Username"
            required
            autofocus
            class="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div class="mb-4 relative">
          <label for="password">Password</label>
          <div class="relative">
            <input
              v-model="password"
              :type="passwordVisible ? 'text' : 'password'"
              class="w-full mt-1 p-2 border rounded-md pr-10"
              placeholder="Password"
              required
              @input="validatePassword"
            />
            <button
              type="button"
              class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              @click="togglePasswordVisibility"
            >
              <font-awesome-icon
                :icon="passwordVisible ? ['fas', 'eye'] : ['fas', 'eye-slash']"
                :class="{
                  'text-gray-600': passwordVisible,
                  'text-gray-400': !passwordVisible,
                }"
              />
            </button>
          </div>
        </div>
        <!-- <button type="submit" :disabled="loading">Login</button> -->
      </form>
      <div class="flex justify-between my-4">
        <router-link to="/">
          <button
            type="button"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Return to Home
          </button>
        </router-link>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          :disabled="loading"
          @click="login"
        >
          Login
        </button>
      </div>
      <div class="flex justify-between mt-4">
        <p class="align-flex-end">
          No account?
          <span class="register-link">
            <router-link :to="{ name: 'register' }">Register</router-link></span
          >
        </p>
      </div>
    </div>
    <LoadingDots :show="loading" />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import VueCookies from "vue-cookies";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useToast } from "vue-toastification";

// import { useCookies } from "vue3-cookies";
import LoadingDots from "../components/LoadingDots.vue";

library.add(faEye, faEyeSlash);

export default {
  //   name: "Login",
  components: {
    FontAwesomeIcon,
    LoadingDots,
  },
  setup() {
    // Get toast interface
    const toast = useToast();

    // Make it available inside methods
    return { toast };
  },
  data: () => ({
    value: true,
    loading: false,
    username: undefined,
    password: undefined,
    errorSummary: undefined,
    passwordVisible: false,
  }),
  //   mounted() {
  //     // this.clearLocalStorage();
  //     // this.$refs.form.resetValidation();
  //   },
  methods: {
    submit() {
      console.log("[LogIn] Trying to log in...");
      //   this.$refs.form.validate();
      const credentials = {};
      // const { cookies } = useCookies();

      credentials.username = this.username;
      credentials.password = this.password;
      credentials.grant_type = "password";
      this.loading = true;
      // axios.defaults.withCredentials = true;
      axios
        .post(
          "http://localhost:9500/dc/api/v1/datacloud/auth/login/global",
          credentials
        )
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((response) => {
          console.log(response);
          console.log("Success");
          //   this.$store.commit("setUserLoggedIn", {
          //     username: this.username,
          //   });
          localStorage.setItem("access_token", JSON.stringify(response.data));
          // eslint-disable-next-line unicorn/no-document-cookie
          // document.cookie =
          //   "customCookie=yourCustomValue; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
          //   this.setLocalStorage(response.data);
          //   this.$router.push({
          //     name: "Dashboard",
          //   });
          //   this.toast.success("Successful login!");

          //   const cookies = response.headers["set-cookie"];
          //   if (cookies) {
          //     console.log(cookies);
          //   }
          //   this.$cookies.set(
          //     "auth_token",
          //     "11zrXmzC3hnztnQFc_7ZY8dZotZWXYTjpj0lb1iWdNc",
          //     "expiring time"
          //   );
          VueCookies.set(
            "auth_token",
            // eslint-disable-next-line max-len
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZW1vcm9tZTYiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaXNzIjoib3JjaGVzdHJhdG9yLWFwcCIsImV4cCI6MTY5OTcwNTI5NSwiaWF0IjoxNjk4ODQxMjk1LCJqdGkiOiI0YmNhN2I1Yi0xYjA0LTRmOWYtYjZlYi1hOWMwMGZiMzM5ZTIifQ.DuFh31473eu_1MqKjkHENT-D38QlabgI0nRBUTQzGkM",
            "1h"
          );
          this.toast.success("Successful login!");
          //   console.log(cookies.get("auth_token"));
        })
        .catch((error) => {
          if (error.request && error.response.status === 400) {
            this.errorSummary = "Error 400";
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    login() {
      const keycloak = this.$keycloak;
      console.log(keycloak);
      keycloak
        .login({ username: this.username, password: this.password })
        .then((response) => {
          // The user is now authenticated with Keycloak
          // keycloak.token contains the access token
          VueCookies.set(
            "auth_token",
            // eslint-disable-next-line max-len
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZW1vcm9tZTYiLCJyb2xlIjoiUk9MRV9VU0VSIiwiaXNzIjoib3JjaGVzdHJhdG9yLWFwcCIsImV4cCI6MTY5OTcwNTI5NSwiaWF0IjoxNjk4ODQxMjk1LCJqdGkiOiI0YmNhN2I1Yi0xYjA0LTRmOWYtYjZlYi1hOWMwMGZiMzM5ZTIifQ.DuFh31473eu_1MqKjkHENT-D38QlabgI0nRBUTQzGkM",
            "1h"
          );
          console.log(response);
        })
        .catch((error) => {
          console.error("Login failed", error);
        });
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 429px;
}

.loader.loading::before {
  /* Your loader styles here */
}

.form {
  /* display: flex;
    flex-direction: column;
    align-items: center; */
}

.form-group {
  margin: 8px 0;
}

label {
  font-weight: bold;
}

/* input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  } */

.register-link {
  color: blue; /* Customize the link color as needed */
  text-decoration: none; /* Remove the default underline */
  cursor: pointer; /* Change the cursor on hover to indicate it's clickable */
}

.register-link a:hover {
  text-decoration: underline; /* Add underline on hover */
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
</style>
