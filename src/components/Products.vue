<script setup>
import { ref, computed } from 'vue';
import FetchData from './FetchData.vue';

const products = ref([]);
const categories = ref([]);
const selectedCategory = ref('');

// Handle data fetched from FetchData.vue
const handleDataFetched = ({ products: fetchedProducts, categories: fetchedCategories }) => {
  products.value = fetchedProducts;
  categories.value = fetchedCategories;
};

// Filter products based on selected category
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(product => product.category === selectedCategory.value);
});

// Function to filter products when category changes
const filterByCategory = () => {
  // `filteredProducts` computed property will automatically update
};
</script>

<template>
    <div>
      <FetchData @dataFetched="handleDataFetched" />
      
      <!-- Category Dropdown -->
      <div>
        <label for="category">Select Category:</label>
        <select id="category" v-model="selectedCategory" @change="filterByCategory">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
  
      <!-- Products Display -->
      <div v-if="filteredProducts.length">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <h2>{{ product.title }}</h2>
          <p>${{ product.price}}</p>
          <p>{{ product.category }}</p>

        </div>
      </div>
      <div v-else>
        <p>No products found for selected category.</p>
      </div>
    </div>
  </template>
  
