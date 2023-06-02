import { ref } from "vue";
export default function () {
  //ref có thể theo dõi và thay thế được chính nó. Còn reactive chỉ có thể theo dõi và thay thế được các field nằm bên trong nó.
  let transactions = ref([]);
  let error = ref(null);
  const fetchAll = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      if (!response.ok) throw new Error("Something went wrong.");
      transactions.value = await response.json();
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };
  //Biến nào không có trong return thì template sẽ không sử dụng được
  return { transactions, error, fetchAll };
}
