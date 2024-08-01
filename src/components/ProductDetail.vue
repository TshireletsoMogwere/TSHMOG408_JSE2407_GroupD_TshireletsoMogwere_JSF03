<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = ref(route.params.id);
const product = ref(null);

// Simulate fetching product detail
const fetchProductDetail = async () => {
  const response = await fetch(`https://fakestoreapi.com/products/${productId.value}`);
  product.value = await response.json();
};

onMounted(() => {
  fetchProductDetail();
});
</script>

<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" alt="Product Image" />
    <p>${{ product.price }}</p>
    <p>{{ product.category }}</p>
    <p>{{ product.description }}</p>
    <p>Rating: {{ product.rating }}</p>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>
