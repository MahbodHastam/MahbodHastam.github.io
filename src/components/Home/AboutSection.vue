<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import data from '@/data.json'
import { copy } from '@/utils'

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

const aboutMeParagraphs = [
  `Web Developer with a strong focus on front-end projects (and many experiences with PHP and Laravel) since 2016. Proficient in HTML, CSS, JavaScript and Typescript, I have successfully contributed to numerous companies and person's websites.`,
  `My experience includes implementing responsive designs, integrate back-end APIs (if there's possible), and ensuring cross-browser compatibility. I am always eager to leverage my skills and experience to create engaging and effective user experiences.
`,
]

const onCopy = (string: string, el?: HTMLElement) => {
  copy(string)

  if (!el) return

  el.style.color = '#6ae9c3'

  setTimeout(() => {
    el.style.color = '#7a7a7a'
  }, 1000)
}

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
    <p
      v-for="i in aboutMeParagraphs"
      class="mb-4 text-pretty indent-1 leading-loose lg:text-justify"
    >
      {{ i }}
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
              class="ml-4 inline-flex items-center gap-1 underline decoration-black/20 duration-100 hover:opacity-70"
            >
              {{ i.label }}
            </a>
            <button
              @click.prevent="
                onCopy(
                  i.url.replace('mailto:', ''),
                  $event.currentTarget as HTMLElement,
                )
              "
              class="ml-2 inline-flex items-center align-middle text-[#7a7a7a] duration-100 hover:opacity-70"
            >
              <Icon icon="tabler:copy" class="h-4 w-4" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
