<template>
  <div>
    <div>List</div>
    <div v-for="item in items" :key="item" data-test="item">{{ item }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>
