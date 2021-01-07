import { createRouter, createWebHistory } from 'vue-router';
import Home from '/Auth/pages/Home.page.vue';
import Login from '/Auth/pages/Login.page.vue';
import About from '/Auth/pages/About.page.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
