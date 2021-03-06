import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [{ path: "/", component: () => import("../views/Product.vue") }],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
