<script>
import { ref } from 'vue';
import Header from '../Header.vue';
import FetchData from '../FetchData.vue';

export default {
  components: {
    Header,
    FetchData,
  },
  setup() {
    const selectedCategory = ref('All');

    const setSelectedCategory = (category) => {
      selectedCategory.value = category;
    };

    return { selectedCategory, setSelectedCategory };
  },
};
</script>

<template>
    <div>
      <Header @category-select="setSelectedCategory" />
      <h1>Product List</h1>
      <FetchData :selectedCategory="selectedCategory" />
    </div>
  </template>