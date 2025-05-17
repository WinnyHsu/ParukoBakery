import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomeView.vue";
import MenuView from "../pages/MenuView.vue";
import AboutView from "../pages/AboutView.vue";
import NewsView from "../pages/NewsView.vue";
import DetailNews from "@/pages/DetailNews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/news/:date",
    name: "news-detail",
    component: DetailNews,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
