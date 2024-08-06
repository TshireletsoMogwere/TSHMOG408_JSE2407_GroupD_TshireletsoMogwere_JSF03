<script>
/**
 * SkeletonLoader is a Vue component used to display a loading skeleton.
 * This component is typically used as a placeholder while content is being fetched or loaded.
 */
export default {
  name: "SkeletonLoader",
};
</script>

<template>
  <div class="skeleton-card">
    <div class="skeleton-image"></div>
    <div class="skeleton-text skeleton-title"></div>
    <div class="skeleton-text skeleton-description"></div>
    <div class="skeleton-text skeleton-price"></div>
  </div>
</template>

<style scoped>
.skeleton-card {
  aspect-ratio: 1;
  position: relative;
  top: 50%;
  font-size: small;
  text-align: center;
  color: rgb(101, 94, 94);
  text-decoration-style: none;
  padding: 20px;
  margin-top: 100px;
  border: rgb(33, 32, 32);
  border-radius: 10%;
  background-color: rgb(252, 251, 251);
  cursor: pointer;
  width: 300px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.skeleton-image {
  width: 100%;
  height: 200px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 16px;
}

.skeleton-text {
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 12px;
}

.skeleton-title {
  width: 60%;
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
