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
    <div v-else>Loading transactions...</div>
  </div>
</template>

<script>
export default {
  name: "TransactionsPage",
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
  },
};
</script>
