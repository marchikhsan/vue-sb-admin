import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  { path: "/dashboard/", component: Dashboard },
  { path: "/login/", component: Login },
  { path: "/registrasi/", component: Register },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
