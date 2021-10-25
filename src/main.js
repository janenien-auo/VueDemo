import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "jquery";
import "bootstrap-css";
import "bootstrap";

//import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
// import "./assets/vendor/quill/quill.snow.css";
// import "./assets/vendor/quill/quill.bubble.css";
// import "./assets/vendor/simple-datatables/style.css";

import "./assets/css/style.css";


//import "./assets/vendor/bootstrap/js/bootstrap.bundle.js";
// import "./assets/vendor/php-email-form/validate.js";
// import "./assets/vendor/quill/quill.min.js";
// import "./assets/vendor/tinymce/tinymce.min.js";
// import "./assets/vendor/simple-datatables/simple-datatables.js";
// import "./assets/vendor/chart.js/chart.min.js";
// import "./assets/vendor/apexcharts/apexcharts.min.js";
// import "./assets/vendor/echarts/echarts.min.js";
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
