<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark navbg">
    <div class="d-flex justify-content-between">
      <a id="sidebarCollapse" >
        <font-awesome-icon icon="align-justify" />
      </a>
        <a>
         <font-awesome-icon :icon="['fas', 'user']" />
      </a>
    </div>
    

  
  </nav>
</template>

<script>
import "bootstrap-css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

library.add(faAlignJustify);

export default {
  name: "Header",
};
</script>

<style scoped>
.bg-dark {
  background-color: #0c3a5a !important;
}

.navbg {
  background-color: #6f80c9 !important;
}

.topnav {
  padding-left: 0;
  height: 3.625rem;
  z-index: 1039;
  font-size: 0.9rem;
}
.topnav .navbar-brand {
  width: 15rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}
.topnav .navbar-brand img {
  height: 0.8rem;
}
.topnav.navbar-dark #sidebarCollapse {
  color: rgba(255, 255, 255, 0.5);
}
.topnav.navbar-dark .navbar-brand {
  color: #fff;
}
.topnav.navbar-light #sidebarCollapse {
  color: #1f2d41;
}
.topnav.navbar-light .navbar-brand {
  color: #323f52;
}
.topnav .dropdown {
  position: static;
}
.topnav .dropdown .dropdown-menu {
  width: calc(100% - 1.5rem);
  right: 0.75rem;
  left: 0.75rem;
}
</style>
