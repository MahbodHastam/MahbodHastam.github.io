<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNavbar from './components/base/HeaderNavbar.vue'
import Footer from './components/base/Footer.vue'
import Cursor from './components/base/Cursor.vue'
</script>

<template>
  <HeaderNavbar />
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition as string" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <Footer />
  <Cursor />
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-enter-active {
  @apply transition-all duration-700 ease-in-out;
}

.slide-left-enter-from,
.slide-right-leave-to {
  @apply translate-x-10 scale-95 opacity-0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  @apply -translate-x-10 scale-95 opacity-0;
}

/* .slide-left-enter-to,
.slide-right-leave-from {
  @apply translate-x-0 opacity-100;
} */
</style>
