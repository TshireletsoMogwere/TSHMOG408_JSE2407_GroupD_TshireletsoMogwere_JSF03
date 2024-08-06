<template>
  <div class="skeleton-container">
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-image"></div>
  </div>
</template>

<style scoped>
.skeleton-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  padding: 20px;
  margin-left: 600px;
  position: absolute;
  top: 200px;
}

.skeleton {
  background-color: #716f6f;
  border-radius: 4px;
  width: 100%;
}

.skeleton-title {
  width: 50%;
  height: 2rem;
}

.skeleton-text {
  width: 80%;
  height: 1.5rem;
}

.skeleton-image {
  width: 400px;
  height: 480px;
  position: relative;
  right: 400px;
  bottom: 200px;
}
</style>
