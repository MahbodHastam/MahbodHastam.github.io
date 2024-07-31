<script setup lang="ts">
import Wrapper from './Wrapper.vue'

const socials = [
  {
    label: 'Github',
    href: 'https://github.com/MahbodHastam',
    icon: 'tabler:brand-github',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/MahbodAhmadiii',
    icon: 'tabler:brand-instagram',
  },
  { label: 'X', href: 'https://x.com/MahbodHastam', icon: 'tabler:brand-x' },
]
</script>

<template>
  <Wrapper container class="grid grid-cols-3 pb-12">
    <a
      v-for="social in socials"
      :href="social.href"
      target="_blank"
      class="grid place-content-center text-[#9d9d9d] duration-100 hover:text-[#7a7a7a]"
    >
      <Icon :icon="social.icon" class="cc-scale h-16 w-16 lg:h-20 lg:w-20" />
    </a>
  </Wrapper>
</template>
