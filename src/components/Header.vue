<script setup>
import { defineEmits, defineProps } from 'vue';
const props = defineProps({
  categories: Array,
  selectedCategory: String
});

const emit = defineEmits(['update:selectedCategory']);

const selectCategory = (category) => {
  emit('update:selectedCategory', category);
};
</script>



<template>
    <header class="header">
      <h1 class="store">TM Store</h1>
      <img src="/src/assets/favicon.ico" alt="icon" class="icon">
      <div class="category-selector">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ 'active': category === selectedCategory }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </header>
  </template>
  
<style scoped>
.header {
    background-color: rgb(177, 193, 236);
  color: black;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  position: fixed; 
}

.icon {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 90px;
  height: full;
 
}

.store {
  margin: 0; 
  margin-left: 100px;
}

.category-selector {
  display: flex;
  gap: 10px;
  position: relative;
  right: 10%;
  margin: 0 auto; 
}

.category-selector button {
  padding: 8px 16px;
  border: none;
  background-color: #202224;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.category-selector button.active {
  background-color: rgb(41, 99, 119);
}

.category-selector button:hover {
  background-color: rgb(41, 99, 119);
}
</style>