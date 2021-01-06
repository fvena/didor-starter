import { createRouter, createWebHistory } from 'vue-router';
import Home from '/@/pages/Home.page.vue';
import About from '/@/pages/About.page.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
