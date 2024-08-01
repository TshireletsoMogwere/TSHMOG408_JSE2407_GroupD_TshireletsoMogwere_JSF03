
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue'
import ProductDetails from './components/pages/ProductDetails.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductDetails },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  
export default router;
  