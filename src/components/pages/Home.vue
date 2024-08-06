<script>
/**
 *  This is a Vue component that includes a Header and FetchData components.
 * It uses the Composition API to manage the state of the selected category.
 */
import { ref } from 'vue';
import Header from '../Header.vue';
import FetchData from '../FetchData.vue';

export default {
  components: {
    Header,
    FetchData,
  },
  setup() {
    /**
     *  The `selectedCategory` ref holds the currently selected category.
     * @type {ref<string>}
     */
    const selectedCategory = ref('All');

    /**
     * Sets selected category
     * @param {string} category - The category to select
     */
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

      <FetchData :selectedCategory="selectedCategory" />
    </div>
  </template>