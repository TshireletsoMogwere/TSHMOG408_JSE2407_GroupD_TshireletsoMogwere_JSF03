import { createRouter, createWebHistory } from 'vue-router';
import Products from '../components/Products.vue';
import ProductDetail from '../components/ProductDetail.vue';

const routes = [{
    path: '/',
    name: 'products',
    component: Products,
}
 , {
    path: '/products/:productId',
    name: 'productDetail',
    component: ProductDetail,
 }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;