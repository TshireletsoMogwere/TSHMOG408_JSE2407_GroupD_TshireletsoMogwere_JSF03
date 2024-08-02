<script>
export default {
  name: 'SkeletonDetailsLoader',
};
</script>

<template>
    <div class="skeleton-card">
        <div class="skeleton-image"></div>
    <div class=" skeleton-title"></div>
    <div class="skeleton-description"></div>
    <div class="skeleton-price"></div>
    </div>
  </template>

<style scoped>
.skeleton-card {
    margin: 20px auto;
    padding: 20px;
}


.skeleton-image {
    width: 20%;
    height: full;
    margin-top: 200px;
}

.skeleton-text {
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 12px;
}

.skeleton-title {
    position: absolute;
  top: 30%;
  left: 40%;
}

.skeleton-description {
  width: 80%;
}

.skeleton-price {
  width: 40%;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton-text,
.skeleton-image {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
</style>