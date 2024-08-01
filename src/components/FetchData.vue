<script>
import { ref, onMounted} from 'vue';
import Products from './Products.vue';
import { useRouter } from 'vue-router';


export default {
  components: { Products},
  props: {
    selectedCategory: {
      type: String,
      default: 'All',
    },
  },

  /**
   * 
   * @param props 
   * 
   */
  setup(props) {
    const products = ref([]);
    const filteredProducts = ref([]);
    const originalOrder = ref([]);
    const router = useRouter();

    const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        products.value = data;
        filteredProducts.value = data;
        originalOrder.value = [...data];  
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    /**
     * 
     * @param category 
     */

    const filterByCategory = (category) => {
      if (category === 'All') {
        filteredProducts.value = products.value;
      } else {
        filteredProducts.value = products.value.filter(product => product.category === category);
      }
    };


    /**
     * 
     * @param order 
     */
    const sortByPrice = (order) => {
      if (order === 'lowToHigh') {
        filteredProducts.value.sort((a, b) => a.price - b.price);
      } else if (order === 'highToLow') {
        filteredProducts.value.sort((a, b) => b.price - a.price);
      }
    };

    const handleSortChange = (event) => {
      const sortOrder = event.target.value;
      if (sortOrder === 'default') {
        resetFiltersAndSorting();
      } else {
        sortByPrice(sortOrder);
      }
    };

  const resetFiltersAndSorting = () => {
      filteredProducts.value = [...originalOrder.value];  
    };


    /**
     * 
     * @param id 
     */
    const goToProduct = (id) => {
      router.push(`/product/${id}`);
    };

    watch(() => props.selectedCategory, filterByCategory);

    onMounted(fetchProducts);

    return { products, filteredProducts, sortByPrice, resetFiltersAndSorting, goToProduct };
  },
};

</script>

<template>
   <div>
    <div class="sort-options">
      <select @change="handleSortChange" class="sort-dropdown">
        <option value="default">Default</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
      <button @click="resetFiltersAndSorting">Reset</button>
    </div>
    <div class="product-list">
      <ProductItem
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
  margin-bottom: 16px;
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