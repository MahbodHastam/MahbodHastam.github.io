<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('#about', {
    y: 0,
    scale: '1',
    borderRadius: '1rem 1rem 3rem 3rem',
    scrollTrigger: {
      trigger: '#about',
      start: 'top center',
      end: 'center center',
      scrub: 0.7,
      toggleActions: 'restart pause resume pause',
    },
  })
})
</script>

<template>
  <div
    id="about"
    class="bg-white-100 rounded-5xl mt-24 w-full scale-90 p-12 text-text lg:mt-40"
  >
    <h2 class="cc-text mb-4 text-xl font-medium">About me</h2>
    <p v-for="i in 4" class="cc-text mb-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quos tenetur
      cumque magni esse rerum, blanditiis quod at temporibus nam reprehenderit
      ratione quia deserunt asperiores quis impedit. Quod, omnis fugit.
    </p>
  </div>
</template>
