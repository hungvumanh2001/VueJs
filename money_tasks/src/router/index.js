import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Transactions from "../pages/transactions.vue";
import TransactionDetail from "../pages/transaction-details.vue";
import NotFound from "../pages/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/transactions",
    name: "ransactions",
    component: Transactions,
  },
  {
    path: "/ts",
    redirect: "/transactions",
  },
  {
    path: "/transactions/:id",
    component: TransactionDetail,
  },
  // Đường dẫn không tìm thấy
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
