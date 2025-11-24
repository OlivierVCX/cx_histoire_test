<template>
  <Story title="BaseInput">
    <Variant title="Default">
      <div>
        <BaseInput placeholder="Tape quelque chose..." v-model="value" />
        <p>Valeur : {{ value }}</p>
      </div>
    </Variant>
  </Story>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';

const value = ref('');
</script>