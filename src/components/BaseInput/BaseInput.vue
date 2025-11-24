<template>
  <input
    :placeholder="placeholder"
    v-model="inputValue"
    class="input"
    @input="$emit('update:modelValue', inputValue)"
  />
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: String,
  placeholder: String
})
const inputValue = ref(props.modelValue)
watch(() => props.modelValue, val => inputValue.value = val)
</script>

<style scoped>
.input {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 200px;
}
</style>