<template>
  <Story title="BaseCard">
    <Variant title="Simple">
      <BaseCard>
        <h3>Carte simple</h3>
        <p>Un exemple de contenu dans une carte.</p>
        <BaseButton>Action</BaseButton>
      </BaseCard>
    </Variant>
  </Story>
</template>

<script setup>
import BaseCard from './BaseCard.vue';
import BaseButton from '../BaseButton/BaseButton.vue';
</script>
