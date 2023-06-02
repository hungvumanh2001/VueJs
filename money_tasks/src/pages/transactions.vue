<template>
  <div>
    <h1>This is here transactions page</h1>
    <div v-if="transactions.length > 0">
      <div
        class="item"
        v-for="transaction in transactions"
        :key="transaction.id"
      >
        <router-link
          :to="{
            name: 'transaction-details-router',
            params: { id: transaction.id },
          }"
        >
          {{ transaction.name }}
        </router-link>
      </div>
    </div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>Loading transactions...</div>
  </div>
</template>

<script>
import useTransactions from "../uses/fetchTransactions";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "TransactionsPage",
  // data() {
  //   return {
  //     transactions: [],
  //   };
  // },
  // created() {
  //   fetch("http://localhost:3000/transactions")
  //     .then((response) => response.json())
  //     .then((data) => (this.transactions = data));
  // },
  setup() {
    //dùng Composition API
    // const { transactions, error, fetchAll } = useTransactions();
    // fetchAll();
    // return { transactions, error };
    //dùng vuex
    const store = useStore();
    store.dispatch("fetchAllTractions");
    const transactions = computed(() => store.state.transactions);
    const error = computed(() => store.state.error);
    return { transactions, error };
  },
};
</script>
