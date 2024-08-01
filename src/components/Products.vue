<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <!-- Products Display -->
   <div class="product-card">
    <img :src="product.image" alt="product image" class="product-image" />
    <div class="product-details">
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-price">${{ product.price }}</p>
    </div>
  </div>
  </template>
  
  
<style scoped> 

.product-image {
    display: block;
  margin: 0 auto;
  width: 60%;
  height: 65%;
  position: relative;
  transition: transform 0.3s ease-in-out;
}


.products-container {
    display: grid;
     grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
     gap: 20px;
     justify-content: center;
}

.product-card {
    aspect-ratio: 1;
    position: relative;
    top: 50%;
    font-size: small;
    text-align: center;
    color: rgb(101, 94, 94);
    text-decoration-style: none;
    padding: 20px;
    border:  rgb(33, 32, 32);
    border-radius: 10%;
    background-color: rgb(252, 251, 251);
    cursor: pointer;
    width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-card h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.product-card p {
  margin: 0.5rem 0;
}

.product-card p:first-of-type {
  font-weight: bold;
  color: #333;
}
</style>

