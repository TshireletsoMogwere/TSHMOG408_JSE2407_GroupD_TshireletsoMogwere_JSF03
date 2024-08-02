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
    aspect-ratio: 1;
    position: relative;
    top: 50%;
    font-size: small;
    text-align: center;
    color: rgb(101, 94, 94);
    text-decoration-style: none;
    padding: 20px;
    margin-top: 100px;
    border:  rgb(33, 32, 32);
    border-radius: 10%;
    background-color: rgb(252, 251, 251);
    cursor: pointer;
    width: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}


</style>