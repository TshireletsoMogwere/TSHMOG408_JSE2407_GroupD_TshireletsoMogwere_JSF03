<script>
 import { ref, onMounted } from 'vue';
  import { useRoute, useRouter} from 'vue-router';
  import SkeletonDetailsLoader from '../SkeletonDetailsLoader.vue';
import Header from '../Header.vue';

  
  export default {
    components: {  SkeletonDetailsLoader},
    setup() {
      const product = ref(null);
      const loading = ref(true);
      const route = useRoute();
      const router = useRouter();
  
      const fetchProduct = async () => {
        try {
        const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
        product.value = await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        loading.value = false; // Set loading to false once data is fetched
      }
    };
  
      onMounted(fetchProduct);

      const goBack = () => {
      router.push('/'); 
    };
  
      return { product,loading, goBack };
    },
  };

</script>

<template>

  
<div v-if="loading" class="skeleton-container">
      <SkeletonDetailsLoader/> 
    </div>

    
<div v-if="product" class="product-details">
      <button @click="goBack" class="go-back">
      <i class="fas fa-arrow-left"></i> Go Back
    </button>
      <h1>{{ product.title }}</h1>
      <p id="description">{{ product.description }}</p>
      <p id="price">Price: ${{ product.price }}</p>
      <p id="category">Category: {{ product.category }}</p>
      <button>      
        <span style="color: white;">ratings {{ product.rating.rate }} </span>
        <span style="color: lightgray;">{{ product.rating.count }} reviews</span>
    </button>
<div class="product-image">
<img :src="product.image" :alt="product.title" />
</div>
    </div>
</template>

<style scoped>

.product-details {
  margin-left: 600px ;
  padding: 20px;
  max-width: 1200px;
  gap: 20px; 
  position: absolute;
  top: 200px;
}

img {
  width: 400px;
  height: full;
  position: relative;
  right: 500px;
  bottom: 300px;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-info h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

#description {
  font-size: larger;
}

#price {
  font-weight: bold;
  font-size: 1.5rem;
}

#category {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}


button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  text-align: center;
}

.ratings-button {
  background-color: #242424;
  margin-top: 1rem;
}

.go-back {
  background-color: rgb(129, 129, 129);
  border: none;
}

button:hover {
  background-color: #a29d9d;
}

.ratings-button:hover {
  background-color: #e6e7e6;
}

.rating-text {
  color: white;
}

.review-text {
  color: lightgray;
}


</style>