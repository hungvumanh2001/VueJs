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
import { ref } from "vue";
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
    //ref có thể theo dõi và thay thế được chính nó. Còn reactive chỉ có thể theo dõi và thay thế được các field nằm bên trong nó.
    let transactions = ref([]);
    let error = ref(null);
    const fetchAll = async () => {
      try {
        const response = await fetch("http://localhost:3000/transaction");
        if (!response.ok) throw new Error("Something went wrong.");
        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    fetchAll();
    //Biến nào không có trong return thì template sẽ không sử dụng được
    return { transactions, error };
  },
};
</script>
