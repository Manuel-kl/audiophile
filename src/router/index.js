import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/headphones",
    name: "headphones",
    component: () =>
      import(
        /* webpackChunkName: "headphones" */ "../views/HeadphonesView.vue"
      ),
  },
  {
    path: "/speakers",
    name: "speakers",
    component: () =>
      import(/* webpackChunkName: "speakers" */ "../views/SpeakersView.vue"),
  },
  {
    path: "/earphones",
    name: "earphones",
    component: () =>
      import(/* webpackChunkName: "earphones" */ "../views/EarphonesView.vue"),
  },
  {
    path: "/xx99-headphones",
    name: "xx99-headphone",
    component: () =>
      import(
        /* webpackChunkName: "headphones-details" */ "../views/XX99HeadphonesView.vue"
      ),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
