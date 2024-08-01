<script>
 import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const product = ref(null);
      const route = useRoute();
  
      const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
        product.value = await response.json();
      };
  
      onMounted(fetchProduct);
  
      return { product };
    },
  };

</script>
<template>
<div v-if="product">
      <img :src="product.image" :alt="product.title" />
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
    </div>
</template>