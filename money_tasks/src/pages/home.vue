<template>
  <div class="home">
    <h1>This is here home page</h1>
    <input type="text" v-model="searchKey" />
    <ul>
      <li v-for="(customer, index) in customersFilled" :key="index">
        {{ customer }}
      </li>
    </ul>
    <button @click="onChangeSomething">Click me</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
export default {
  name: "HomePage",
  setup() {
    let firstName = ref("Sky Albert");
    let customers = reactive(["Hùng Vũ Mạnh", "Sky Albert", "David", "Alex"]);
    let searchKey = ref("");
    function onChangeSomething() {
      console.log("running here....");
      firstName.value = "Hung";
      console.log(firstName);
    }
    //computed dùng để tính toán khi 1 biến nào đấy gọi trong nó được thay đổi
    const customersFilled = computed(() =>
      customers.filter((customer) =>
        customer.toUpperCase().includes(searchKey.value.toUpperCase())
      )
    );
    //watch dùng để theo dõi sự thay đổi của biến mà mình muốn kiểm tra
    watch(searchKey, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    //giống computed nhưng không trả ra giá trị
    watchEffect(() => {
      console.log(searchKey.value);
    });
    return {
      firstName,
      customers,
      onChangeSomething,
      searchKey,
      customersFilled,
    };
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    console.log(this.$store.state.count);
    this.count = this.$store.state.count;
  },
};
</script>
