<template>
  <base-nav />
  <router-view />
</template>

<script>
import Nav from "./components/nav.vue";
export default {
  name: "App",
  components: {
    BaseNav:  Nav
  }
};
</script>

