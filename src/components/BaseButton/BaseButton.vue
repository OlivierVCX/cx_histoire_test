<template>
  <button :class="['btn', `btn-${variant}`]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' }
})
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.btn-primary { background: #42b883; color: white; }
.btn-secondary { background: #35495e; color: white; }
</style>