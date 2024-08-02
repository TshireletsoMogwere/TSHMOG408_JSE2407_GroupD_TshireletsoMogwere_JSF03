<script>

import '@fortawesome/fontawesome-free/css/all.css'
import Header from './components/Header.vue';
export default {
  components: {
    Header 
  },
};

</script>

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

