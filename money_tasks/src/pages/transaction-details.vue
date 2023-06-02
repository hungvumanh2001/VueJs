<template>
  <div>
    <div v-if="transaction">
      <h1>This is here transaction details page</h1>
      <h1>ID: {{ transaction.id }}</h1>
      <h3>Name: {{ transaction.name }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>Loading transaction {{ $route.params.id }}...</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "TransactionDetailsPage",
  // computed: {
  //   transaction() {
  //     return this.$store.state.transaction;
  //   },
  //   transactionsFiltered() {
  //     return this.$store.getters.transactionsFiltered;
  //   },
  // },
  // created() {
  //   // //sử dụng option API bình thường
  //   // fetch("http://localhost:3000/transactions/" + this.$route.params.id)
  //   //   .then((response) => response.json())
  //   //   .then((data) => (this.transaction = data))
  //   //   .then(() => console.log(this.transaction));
  //   //sử dụng Vuex
  //   this.$store.dispatch("fetchTraction", { id: this.$route.params.id });
  // },
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchTraction", { id: route.params.id });
    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
