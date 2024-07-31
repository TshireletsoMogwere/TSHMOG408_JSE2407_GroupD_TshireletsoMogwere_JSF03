<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import FetchData from './FetchData.vue';
import Header from "./Header.vue";

const products = ref([]);
const categories = ref([]);
const selectedCategory = ref('');
const selectedSort = ref(''); 
const router = useRouter();

// Handle data fetched from FetchData.vue
const handleDataFetched = ({ products: fetchedProducts, categories: fetchedCategories }) => {
  products.value = fetchedProducts.map(product => ({
    ...product,
    price: Number(product.price) 
}));
  categories.value = fetchedCategories;
};

// Filter products based on selected category
const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(product => product.category === selectedCategory.value);
});

// Sort products based on selected sort order
const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value];
  if (selectedSort.value === 'lowToHigh') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (selectedSort.value === 'highToLow') {
    sorted.sort((a, b) => b.price - a.price);
  }
  return sorted;
});


// Function to filter products when category changes
const filterByCategory = () => {
  // `filteredProducts` computed property will automatically update
};

// Function to reset filters and sorting
const resetFiltersAndSorting = () => {
  selectedCategory.value = '';
  selectedSort.value = '';
};

</script>

<template>
    <div>
      <FetchData @dataFetched="handleDataFetched" />
      
         <!-- Header with Category Buttons -->
    <Header 
      :categories="categories" 
      v-model:selectedCategory="selectedCategory"
    />

     

          <!-- Sort Dropdown -->
    <div class="sort">
      <label for="sort">Sort by Price:</label>
      <select id="sort" v-model="selectedSort">
        <option value="">All</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

        <!-- Reset Button -->
      
      <button @click="resetFiltersAndSorting">Reset Filters and Sorting</button>
      </div>
    
    

  
      <!-- Products Display -->
      <div v-if="sortedProducts.length" class="products-container">
        <div v-for="product in sortedProducts" :key="product.id" class="product-card" @click="navigateToProduct(product.id)">
            <img :src="product.image" alt="Product Image" class="product-image"/>
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

.sort {
    position: fixed; 
    top: 11%; 
    left: 0;
    right: 0;
    background-color: rgb(41, 99, 119);
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    z-index: 1000; 
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center; 
    gap: 10px; 
}

.sort label {
    margin-right: 10px; 
}

.sort select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    margin-right: 10px; 
}

.sort button {
    padding: 8px 16px;
    border: none;
    background-color: #202224;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.sort button:hover {
    background-color: #41a0b5; 
}


.product-image {
    display: block;
  margin: 0 auto;
  width: 60%;
  height: 65%;
  position: relative;
  transition: transform 0.3s ease-in-out;
}


.products-container {
    display: grid;
     grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
     gap: 20px;
     justify-content: center;
}

.product-card {
    aspect-ratio: 1;
    position: relative;
    top: 50%;
    font-size: small;
    text-align: center;
    color: rgb(101, 94, 94);
    text-decoration-style: none;
    padding: 20px;
    border:  rgb(33, 32, 32);
    border-radius: 10%;
    background-color: rgb(252, 251, 251);
    cursor: pointer;
    width: 300px;
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

