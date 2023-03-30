import { createRouter, createWebHistory } from "vue-router";
import ArticleDetails from "../views/ArticleDetails.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/ArticleDetails/:index",
    name: "ArticleDetails",
    component: ArticleDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
