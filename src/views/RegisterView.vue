<template>
  <div class="flex items-start pt-16 justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-full sm:w-96">
      <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block font-medium">Username</label>
          <input
            v-model="user.username"
            type="text"
            class="w-full mt-1 p-2 border rounded-md"
            @input="validateUsername"
          />
        </div>
        <span v-if="usernameError" class="text-red-500">{{
          usernameError
        }}</span>
        <span
          v-if="!user.username && user.username !== undefined"
          class="text-red-500"
          >Username is Required</span
        >
        <div class="mb-4">
          <label class="block font-medium">Email</label>
          <input
            v-model="user.email"
            type="email"
            class="w-full mt-1 p-2 border rounded-md"
            @input="validateEmail"
          />
        </div>
        <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
        <span
          v-if="!user.email && user.email !== undefined"
          class="text-red-500"
          >Email is required</span
        >
        <div class="mb-4">
          <label class="block font-medium">Organization</label>
          <input
            v-model="user.organization"
            type="text"
            class="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div class="mb-4 relative">
          <label class="block font-medium">Password</label>
          <div class="relative">
            <input
              v-model="user.password"
              :type="passwordVisible ? 'text' : 'password'"
              class="w-full mt-1 p-2 border rounded-md pr-10"
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
        <span v-if="passwordError" class="text-red-500">{{
          passwordError
        }}</span>
        <span
          v-if="!user.password && user.password !== undefined"
          class="text-red-500"
          >Password is required</span
        >
        <div class="mb-4">
          <label class="block font-medium">Confirm Password</label>
          <input
            v-model="user.confirmPassword"
            type="password"
            class="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <span
          v-if="!user.confirmPassword && user.confirmPassword !== undefined"
          class="text-red-500"
          >Confirm Password is required</span
        >
        <span
          v-if="
            user.confirmPassword &&
            user.confirmPassword !== undefined &&
            user.confirmPassword !== user.password
          "
          class="text-red-500"
          >Passwords do not match</span
        >
        <div class="flex justify-between mt-4">
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            :class="{ 'disabled-button': !isFormValid }"
            :disabled="!isFormValid"
          >
            Register
          </button>
          <button
            type="button"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            @click="$router.push({ path: '/' })"
          >
            Return to Home
          </button>
        </div>
      </form>
    </div>
    <LoadingDots :show="loading" />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useToast } from "vue-toastification";

import LoadingDots from "../components/LoadingDots.vue";

library.add(faEye, faEyeSlash);

const keycloakClientId = import.meta.env.VITE_KEYCLOAK_CLIENT_ID;
const keycloakClientSecret = import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET;
const keycloakUsername = import.meta.env.VITE_KEYCLOAK_USERNAME;
const keycloakPassword = import.meta.env.VITE_KEYCLOAK_GRANT_PASSWORD;
const keycloakGrantType = import.meta.env.VITE_KEYCLOAK_GRANT_TYPE;

export default {
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
  data() {
    return {
      loading: false,
      user: {
        username: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined,
        realmRoles: [],
        organization: undefined, // TODO may be needed in future
        // TODO define firstname and lastname fields or provide input fields
        firstName: "",
        lastName: "",
      },
      usernameError: "",
      emailError: "",
      passwordError: "",
      passwordVisible: false,
      responseStatus: undefined,
      errorSummary: undefined,
    };
  },
  computed: {
    isFormValid() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return (
        this.user.username &&
        this.user.email &&
        this.user.password &&
        this.user.password === this.user.confirmPassword &&
        !this.usernameError &&
        !this.emailError &&
        !this.passwordError
      );
    },
  },
  methods: {
    validateUsername() {
      const { username } = this.user;

      if (username.length < 4) {
        this.usernameError = "Username must be at least 4 characters long.";
      } else if (!/^\w+$/.test(username)) {
        this.usernameError =
          "Username can only contain letters, numbers, and underscores.";
      } else {
        this.usernameError = "";
      }
    },
    validateEmail() {
      const { email } = this.user;

      this.emailError = !/^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/.test(email)
        ? "Please enter a valid email address."
        : "";
    },
    validatePassword() {
      const { password } = this.user;

      if (password.length < 6) {
        this.passwordError = "Password must be at least 6 characters long.";
      } else if (!/\d/.test(password)) {
        this.passwordError = "Password must contain at least one digit.";
      } else {
        this.passwordError = "";
      }
    },
    // eslint-disable-next-line consistent-return
    async getDatacloudToken() {
      try {
        const response = await axios.post(
          // eslint-disable-next-line max-len
          "https://datacloud-auth.euprojects.net/auth/realms/user-authentication/protocol/openid-connect/token",
          new URLSearchParams({
            client_id: keycloakClientId,
            client_secret: keycloakClientSecret,
            username: keycloakUsername,
            password: keycloakPassword,
            grant_type: keycloakGrantType,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const accessToken = response.data.access_token;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return accessToken;
      } catch (error) {
        console.error("Error getting token:", error);
      }
    },
    async register() {
      console.log("[LogIn] Trying to sign up...");
      this.loading = true;
      this.toast.info("Requesting new user registration!");

      // Keycloak makes usernames toLowerCase
      this.user.username = this.user.username.toLowerCase();
      const accessToken = await this.getDatacloudToken();

      // TODO fix the link
      await axios
        .post(
          "https://datacloud-dep.euprojects.net/dc/api/v1/datacloud/user/register/keycloak",
          this.user,
          {
            headers: {
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          console.log("Success");
          this.toast.success("Successfully registered user!");
        })
        .catch((error) => {
          console.log(error);
          this.errorSummary = "try again";
          if (error.response) {
            this.toast.error("Error occurred!");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    goBack() {
      window.history.back();
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style scoped>
.disabled-button {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
