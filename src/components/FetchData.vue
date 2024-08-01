<script>
import {  computed, onMounted } from 'vue';
import ProductDisplay from './ProductDisplay.vue';
import { productStore } from '../stores/productStore';
import { useRouter } from 'vue-router';

export default {
  components: { ProductDisplay },
  setup() {
    const store = productStore(); // Use the store
    const router = useRouter();

    // Directly use the store's state and methods
    const filteredProducts = computed(() => {
      let result = store.products.slice();

      // Filter by category
      if (store.selectedCategory !== 'All') {
        result = result.filter(product => product.category === store.selectedCategory);
      }

      // Sort by price
      if (store.sortOption === 'lowToHigh') {
        result.sort((a, b) => a.price - b.price);
      } else if (store.sortOption === 'highToLow') {
        result.sort((a, b) => b.price - a.price);
      }

      return result;
    });

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        store.products = await response.json(); // Directly set store products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const handleSortChange = () => {
      store.setSortOption(store.sortOption); // Set store sort option
    };

    const goToProduct = (id) => {
      router.push(`/product/${id}`);
    };

    onMounted(fetchProducts);

    return {
      filteredProducts,
      store,
      handleSortChange,
      resetFiltersAndSorting: store.resetFiltersAndSorting,
      goToProduct,
    };
  },
};
</script>

<template>
  
   <div>
    <div class="sort-options">
      <select v-model="store.sortOption" @change="handleSortChange" class="sort-dropdown">
        <option value="default">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
      <button @click="resetFiltersAndSorting">Reset</button>
    </div>
    <div class="product-list">
      <ProductDisplay
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @click="goToProduct(product.id)"
      />
    </div>
  </div>
</template>


<style scoped>
.sort-options {
  display: flex;
  gap: 8px;
  margin-bottom: 26px;
  margin-top: 38px;
  justify-content: center;
  position: sticky; 
  top: 0; 
  background-color: rgb(41, 99, 119);
  padding: 10px 0; 
  z-index: 10;
  border-bottom: 1px solid #ddd; 

}

.sort-dropdown {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

</style>