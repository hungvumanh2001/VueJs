<template>
    <div>
      <h1>This is here transactions page</h1>
      <div class="item" v-for="transaction in transactions" :key="transaction.id">
        <router-link 
        :to="{
          name: 'transaction-details-router', 
          params: {id:transaction.id}
          }">
          {{ transaction.name }}
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "TransactionsPage",
  data(){
    return{
        transactions: [
            {
                id: 1,
                name: "Đi siêu thị",
                price: 1000000
            },
            {
                id: 2,
                name: "Thanh toán tiền nhà",
                price: 3000000
            },
            {
                id: 3,
                name: "Thanh toán tiền điện nước",
                price: 3000000
            },
        ]
    }
  }
};
</script>