import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      count: 1000,
      transaction: null,
      transactions: [],
      error: null,
    };
  },
  //dùng để tính toán lại các dữ liệu trước khi trả ra, nếu không muốn lấy dữ liệu mặc định trong state
  getters: {
    transactionsFiltered(state) {
      return state.transactions.filter((transaction) => transaction % 2 === 0);
    },
  },
  //mutations dùng để thay đổi giá trị được lưu trong state
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, trasactionPayload) {
      state.transaction = trasactionPayload;
    },
    setTransactions(state, trasactionsPayload) {
      state.transactions = trasactionsPayload;
    },
    setError(state, errorPayload) {
      state.error = errorPayload;
    },
  },
  //actions dùng để gửi commit giá trị lên mutation
  actions: {
    async fetchTraction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();
      commit("setTransaction", data);
    },
    async fetchAllTractions({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/transactions");
        if (!response.ok) throw new Error("Something went wrong.");
        const data = await response.json();
        commit("setTransactions", data);
      } catch (err) {
        console.log(err);
        commit("setError", err);
      }
    },
  },
});
export default store;
