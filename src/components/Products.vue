<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import FetchData from './FetchData.vue';

const products = ref([]);
const categories = ref([]);
const selectedCategory = ref('');
const router = useRouter();

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
      <div class="category">
        <label for="category">Select Category:</label>
        <select id="category" v-model="selectedCategory" @change="filterByCategory">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
  
      <!-- Products Display -->
      <div v-if="filteredProducts.length" class="products-container">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card" @click="navigateToProduct(product.id)">
          <h2>{{ product.title }}</h2>
          <p>${{ product.price }}</p>
          <p>{{ product.category }}</p>
        </div>
      </div>
      <div v-else>
        <p>Loading Products</p>
      </div>
    </div>
  </template>
  
  
<style scoped> 
.category, label {
    margin-top: 150px;
    text-align: center;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 40px;
}

.product-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-card h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.product-card p {
  margin: 0.5rem 0;
}

.product-card p:first-of-type {
  font-weight: bold;
  color: #333;
}
</style>