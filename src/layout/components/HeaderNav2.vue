<template>
  <!-- <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span class="d-none d-lg-block">EDA Demo</span>
      </a>
      <i id="sidebarCollapse" class="bi bi-list toggle-sidebar-btn"></i>
    </div>

    <div class="header-nav ms-auto bd-highlight">
      <a
        class="nav-link nav-profile d-flex justify-content-end pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <font-awesome-icon :icon="['fas', 'user']" />
        <span class="d-none d-md-block dropdown-toggle ps-2"></span>
      </a>

      <UserInfo />
    </div>
  </header> -->

  <div class="header fixed-top d-flex justify-content-between">
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span class="d-none d-lg-block">EDA Demo</span>
      </a>
      <i id="sidebarCollapse" class="bi bi-list toggle-sidebar-btn"></i>
    </div>

    <div class="header-nav ms-auto bd-highlight">
      <a
        class="nav-link nav-profile d-flex justify-content-end pe-0"
        href="#"
        data-bs-toggle="dropdown"
        style="padding-top: 20px;"
      >
        <font-awesome-icon :icon="['fas', 'user']" />
        <span class="d-none d-md-block dropdown-toggle ps-2"></span>
      </a>

      <UserInfo />
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/userinfo";

export default {
  name: "Header",
  components: { UserInfo },
};
</script>

<style scoped>
</style>
