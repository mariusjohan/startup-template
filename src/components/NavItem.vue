<template>
  <a href="#" class="text-base font-medium px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-500">
    {{ navItemTitle }}
  </a>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    navItemTitle: String
  })
</script>

