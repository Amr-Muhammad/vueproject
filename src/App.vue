<template>
  <navBarComponent v-if="!$route.meta.hideNavbar" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

import navBarComponent from "./components/navBarComponent";

export default {

  name: 'App',
  components: {
    navBarComponent
  }
}
</script>

<style></style>
