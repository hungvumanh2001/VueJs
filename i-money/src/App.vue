<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { fireStoreCore } from "./configs/firebase";
export default {
  setup() {
    async function getTransactions() {
      const response = await fireStoreCore.collection("transactions").get();
      console.log(response.docs);
      const data = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(data);
    }
    getTransactions();
  },
};
</script>
