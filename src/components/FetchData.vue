<script>
import {  ref, computed, onMounted, watch} from 'vue';
import ProductDisplay from './ProductDisplay.vue';
import { productStore } from '../stores/productStore';
import { useRouter } from 'vue-router';
import SkeletonLoader from './SkeletonLoader.vue';

export default {
  components: { ProductDisplay, SkeletonLoader},
  setup() {
    const store = productStore(); // Use the store
    const router = useRouter();
    const loading = ref(true);
    const detailLoading = ref(false);

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
      } finally {
        loading.value = false; // Set loading to false once data is fetched
      }
    };

    const handleSortChange = async () => {
      store.setSortOption(store.sortOption); // Set store sort option
      loading.value = true;
      await new Promise(resolve => setTimeout(resolve, 600)); // Simulate delay
      loading.value = false;
    };

    const goToProduct = async (id) => {
      detailLoading.value = true;
      try {
        await router.push(`/product/${id}`);
      } catch (error) {
        console.error('Error navigating to product:', error);
      } finally {
        detailLoading.value = false;
      }
    };

    onMounted(fetchProducts);

    watch([() => store.sortOption, () => store.selectedCategory], () => {
      handleSortChange();
    });

    return {
      filteredProducts,
      store,
      handleSortChange,
      resetFiltersAndSorting: store.resetFiltersAndSorting,
      goToProduct,
      loading,
      detailLoading,

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


    <div v-if="loading" class="skeleton-container">
      <SkeletonLoader v-for="n in 6" :key="n" />
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
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgba(37, 37, 37, 0.871);
  text-align: center;
  padding: 10px;
  position: fixed;
  z-index: 1;
  top: 95px;
}

button {
  margin-left: 15px;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: white;
  border: 1px solid white;
  border-radius: 5px;
}

.sort-dropdown {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 10px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 60px; 
}

.skeleton-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

@media (max-width: 768px) {
  .sort-options {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding: 10px 10px;
  }

  button {
    margin-left: 0;
    margin-top: 10px;
  }

  .sort-dropdown {
    margin-top: 200px;
  }
}
</style>
