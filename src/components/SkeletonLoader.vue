<script>
export default {
  name: 'SkeletonLoader',
};
</script>

<template>
    <div class="skeleton-card"></div>
  </template>

<style scoped>
.skeleton-card {
  width: 200px;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f5f5f5;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>