<script>
 import { ref, onMounted } from 'vue';
  import { useRoute, useRouter} from 'vue-router';
  
  export default {
    setup() {
      const product = ref(null);
      const route = useRoute();
      const router = useRouter();
  
      const fetchProduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
        product.value = await response.json();
      };
  
      onMounted(fetchProduct);

      const goBack = () => {
      router.push('/'); 
    };
  
      return { product, goBack };
    },
  };

</script>
<template>
<div v-if="product" class="product-details">
      <img :src="product.image" :alt="product.title" />
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
    </div>
</template>

<style scoped>
.product-details {
  margin: 20px auto;
  padding: 20px;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  text-align: center;
}

 img {
    width: 20%;
    height: full;
    margin-top: 200px;
}

h1 {
  position: absolute;
  top: 30%;
  left: 40%;
}

 p {
  width: 800px;
  position: absolute;
  top: 40%;
  left: 40%;
  font-size: 25px ;
  
}

#price {
    position: absolute;
  top: 55%;
  
  font-weight: bolder;
  font-size: xx-large ;
}

#category {
    position: absolute;
  top: 62%;
 
  font-size: 30px;
}


button {
  position: absolute;
  top: 73%;
  left: 40%;
  background-color: black;
  color: white;
  border-radius: 5px;
  height: 40px;
  font-weight: bolder ;
  font-size: large;
}

.ratings-button {
  background-color: #242424; 
  margin-bottom: 10px;
}

.go-back {
position: absolute;
top: 20%;
  background-color: rgb(129, 129, 129);
  border: none;
}

button:hover {
  background-color: #a29d9d;
}

.ratings-button:hover {
  background-color: #e6e7e6; 
}



</style>