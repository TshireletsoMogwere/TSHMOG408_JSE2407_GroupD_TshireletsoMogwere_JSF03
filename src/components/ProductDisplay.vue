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
      <p class="product-price">Price: ${{ product.price }}</p>
      <p id="product-category">Category: {{ product.category }}</p>
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


.product-card {
  aspect-ratio: 1;
  font-size: small;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: rgb(101, 94, 94);
  padding: 20px;
  margin-top: 120px; 
  border: rgb(33, 32, 32);
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
  color: rgba(37, 37, 37, 0.871);
}

#product-category  {
  font-size: large;
  color:rgb(65, 58, 58);
  margin-bottom: 1rem;
}

.product-card p {
  margin: 0.5rem 0;
  font-size: large;
  color: black;
}

.product-card p:first-of-type {
  font-weight: bold;
  color: #333;
}

/* Media Queries */
@media (max-width: 768px) {
  .product-card {
    margin-top: 400px;
    width: 80%;
    padding: 15px;
  }

  .product-card h2 {
    font-size: 1.1rem;
  }

  .product-card p {
    font-size: medium;
  }

  #product-category {
    font-size: medium;
  }

  .product-image {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .product-card {
    width: 90%;
    padding: 10px;
  }

  .product-card h2 {
    font-size: 1rem;
  }

  .product-card p {
    font-size: small;
  }

  #product-category {
    font-size: small;
  }

  .product-image {
    width: 100%;
  }
}
</style>

