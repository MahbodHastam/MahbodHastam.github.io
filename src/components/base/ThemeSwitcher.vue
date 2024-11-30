<script setup lang="ts">
import { cn } from '@/utils'
import { inject, ref } from 'vue'

const darkMode = inject('darkMode', ref(false))
</script>

<template>
  <div
    :class="
      cn(
        'bg-background-dark pointer-events-none fixed bottom-0 left-0 right-0 -z-50 h-0 w-full transition-all duration-300 ease-linear',
        [darkMode && 'h-full'],
      )
    "
  ></div>
</template>
