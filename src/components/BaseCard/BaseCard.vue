<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  border-radius: 12px;
  background: #f8f8f8;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  max-width: 300px;
}
</style>