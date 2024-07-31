<script setup lang="ts">
import { cn } from '@/utils'
import { type HTMLAttributes } from 'vue'

const props = defineProps<{
  container?: boolean
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn(['pt-32', container && 'container', props.class])">
    <slot />
  </div>
</template>
