import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * Defines a Pinia store for managing product data, categories, and sorting options.
 * @return {Object} The product store, containing state and methods for managing products, categories, and sorting.
 */
export const productStore = defineStore('productStore', () => {
  /**
   * State: List of products.
   * @type {ref<Array>}
   */
  const products = ref([]);

  /**
   * State: Selected category for filtering products.
   * @type {ref<string>}
   */
  const selectedCategory = ref('All');

  /**
   * State: Sorting option for products.
   * @type {ref<string>}
   */
  const sortOption = ref('default');

  /**
   * 
   * @param {string} category - The category to set as selected.
   */
  const setCategory = (category) => {
    selectedCategory.value = category;
  };

  /**
   * Sets the sorting option for products.
   * @param {string} option - The sorting option to set.
   */
  const setSortOption = (option) => {
    sortOption.value = option;
  };

  /**
   * Resets the filters and sorting to their default values.
   */
  const resetFiltersAndSorting = () => {
    selectedCategory.value = 'All';
    sortOption.value = 'default';
  };

  return {
    products,
    selectedCategory,
    sortOption,
    setCategory,
    setSortOption,
    resetFiltersAndSorting
  };
});
