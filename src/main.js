import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery";
import "bootstrap-css";
import "bootstrap";


import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";

import "./assets/css/style.css";

import "./assets/js/main.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
