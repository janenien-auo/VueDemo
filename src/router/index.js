import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Layout from "@/layout/Layout";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   component: Layout,
  //   children: [{ path: "/", component: () => import("../views/About.vue") }],
  // }, 
  {
    path: "/",
    component: Layout,
    children: [{ path: "/", component: () => import("../views/About.vue") }],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
