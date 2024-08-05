<script>
import { ref, onMounted } from 'vue';
import { productStore } from '../stores/productStore';

export default {
  props: {
    showCategories: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const { state, setCategory } = productStore();
    const categories = ref([]);

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        categories.value = ['All', ...await response.json()];
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    onMounted(fetchCategories);

    return { categories, state, setCategory };
  }
};
</script>



<template>

    <header class="header">
      <h1 class="store">TM Store</h1>
      <img src="/src/assets/favicon.ico" alt="icon" class="icon">
      <div v-if="showCategories" class="category-selector">
        <button
          v-for="category in categories"
          :key="category"
          @click="setCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="header-icons">
      <i class="fas fa-search header-icon" aria-hidden="true"></i>
      <i class="fas fa-shopping-cart header-icon" aria-hidden="true"></i>
      <i class="fas fa-user header-icon" aria-hidden="true"></i>
      </div>
    </header>
  </template>
  
<style scoped>
  .header {
      background-color: rgb(222, 221, 221);
      color: black;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      position: fixed;
      font-weight: bolder;
      font-size: x-large;
    }

    .header-icons {
      display: flex;
      gap: 10px;
      position: relative;
      right: 40px;
    }
    .icon {
      margin-right: 15px; 
      height: auto;
    }

    .store {
      margin: 0;
      margin-left: 120px; 
    }

    .category-selector {
      display: flex;
      gap: 10px;
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

    .header-icons {
      display: flex;
      gap: 30px;
      margin-right: 10px;
    }

    .header-icon {
      font-size: 35px;
      cursor: pointer;
    }

    .header-icon:hover {
      opacity: 0.8;
    }

    /* Media Queries */
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
        font-size: large;
      }

      .store {
        margin-left: 0;
      }

      .category-selector {
        justify-content: center;
        margin-top: 10px;
      }

      .header-icons {
        justify-content: center;
        margin-top: 10px;
        gap: 15px;
        margin-left: 30px;
      }

      .header-icon {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 480px) {
      .header {
        font-size: medium;
        padding: 10px;
      }

      .icon {
        width: 70px;
        margin-right: 10px; 
      }

      .category-selector {
        flex-direction: column;
        gap: 8px;
      }

      .category-selector button {
        padding: 6px 12px;
        font-size: small;
      }

      .header-icon {
        font-size: 1rem;
      }
    }
</style>