<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Page Content -->
    <div id="content">
      <header-nav />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import HeaderNav from "./components/HeaderNav";
import $ from "jquery";
import "bootstrap-css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";


library.add(faAlignLeft);

export default {
  name: "Layout",
  components: {
    Sidebar,  
    HeaderNav,
  },
  mounted() {
    $(document).ready(function () {
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
      });
    });
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
  width: 100%;
  min-height: 100vh;
  transition: all 0.3s;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
