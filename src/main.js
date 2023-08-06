import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "bootstrap/dist/css/bootstrap.css";
import "normalize.css";

/* Define base url for all requests */
axios.defaults.baseURL = "http://localhost:8080/";

/* create pinia's instance and use the persistance plugin */
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
