<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import data from '@/data.json'

gsap.registerPlugin(ScrollTrigger)

const waysToConnectMe = [
  {
    key: 'E-Mail',
    label: data.email,
    url: `mailto:${data.email}`,
  },
  {
    key: 'Github',
    label: `@${data.github}`,
    url: `https://github.com/${data.github}`,
  },
  { key: 'X', label: `@${data.x}`, url: `https://x.com/${data.x}` },
  {
    key: 'Telegram',
    label: `@${data.telegram_username}`,
    url: `https://t.me/${data.telegram_username}`,
  },
]

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
    class="mt-24 w-full scale-90 rounded-5xl bg-white-100 p-12 text-text lg:mt-40"
  >
    <h2 class="mb-4 text-xl font-medium">About me</h2>
    <p v-for="i in 4" class="mb-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quos tenetur
      cumque magni esse rerum, blanditiis quod at temporibus nam reprehenderit
      ratione quia deserunt asperiores quis impedit. Quod, omnis fugit.
    </p>
    <div id="ways">
      <h2 class="mb-4 mt-12 text-xl font-medium">Ways to Connect me</h2>
      <div class="mx-auto">
        <ul class="list-disc space-y-2 marker:text-gray-400 sm:ml-5">
          <li v-for="i in waysToConnectMe">
            <span class="block sm:inline-flex sm:w-20">{{ i.key }}:</span>
            <a
              :href="i.url"
              target="_blank"
              class="ml-4 underline duration-100 hover:opacity-70"
              >{{ i.label }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
