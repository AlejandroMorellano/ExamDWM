import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/App.vue"),
      },
      {
        path: "/formulario",
        name: "formulario",
        component: () => import("../components/Formulario.vue"),
      },
      {
        path: "/carro",
        name: "carro",
        component: () => import("../components/Carro.vue"),
      },
    ],
  },
];

const router = new VueRouter({ routes });
export default router;