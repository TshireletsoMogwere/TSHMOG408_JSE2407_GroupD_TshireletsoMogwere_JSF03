import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import ProductDetails from "./components/pages/ProductDetails.vue";

/**
 * Defines the routes for the application.
 *
 * @type {<Array<Object>}
 * @property {string} path - The URL path for the route.
 * @property {component} component - The component to render the route with.
 */
const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetails },
];

/**
 * Creates a Vue Router instance with history mode and the defined routes.
 * @returns {Router} The Vue Router instance.
 */

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
