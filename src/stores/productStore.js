import { defineStore } from 'pinia';
import { ref } from 'vue';

export const productStore = defineStore('productStore', () => {
  const products = ref([]);
  const selectedCategory = ref('All');
  const sortOption = ref('default');

  const setCategory = (category) => {
    selectedCategory.value = category;
  };

  const setSortOption = (option) => {
    sortOption.value = option;
  };

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
