<template>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
    <p class="pl-4 pr-4 pt-2 small">
      <b>Name:</b><br>{{ $store.getters.name }}
      <span class="w3-div-4" />
      <b>Dept. No:</b><br>{{ $store.getters.dep }}
    </p>
    <div class="dropdown-divider" />
    <a class="dropdown-item" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  components: {},
  data() {
    return {
    
    }
  },
  methods: {
    logout() {
      console.log('logout')

      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {})
    }
  }
}
</script>

<style>
.header-style {
  background-color: #2a4f6b !important;
  color: white;
}

.header-menu-style {
  color: white;
}
</style>
