<script setup>
import { ref, onMounted, defineEmits } from 'vue';

const emit = defineEmits(['dataFetched']);
const products = ref([]);
const categories = ref([]);

onMounted(async () => {
  try {
    const productsResponse = await fetch('https://fakestoreapi.com/products');
    const productsData = await productsResponse.json();
    
    const categoriesResponse = await fetch('https://fakestoreapi.com/products/categories');
    const categoriesData = await categoriesResponse.json();
    
    emit('dataFetched', { products: productsData, categories: categoriesData });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>


