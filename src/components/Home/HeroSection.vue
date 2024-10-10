<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter('.skewElement', 'skewY', 'deg'),
    clamp = gsap.utils.clamp(-20, 20)

  gsap.to('#hero', {
    y: 300,
    scrollTrigger: {
      trigger: '#hero',
      start: '-=200px top',
      end: 'bottom top',
      pinSpacing: false,
      pin: true,
      pinType: 'transform',
      scrub: 0.7,
      toggleActions: 'restart pause resume pause',
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300)
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew
          gsap.to(proxy, {
            skew: 0,
            duration: 1,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          })
        }
      },
    },
  })
})
</script>

<template>
  <div id="hero" class="mt-12 px-6 uppercase text-text">
    <h2
      class="skewElement mx-auto mt-10 w-full text-center text-5xl font-semibold tracking-tighter sm:text-7xl md:max-w-3xl md:text-9xl"
    >
      <p>Another</p>
      <p>Web</p>
      <p>Developer</p>
    </h2>
    <div
      class="mx-auto mt-2 flex max-w-md flex-col items-center space-y-2 text-center text-xs font-semibold md:flex-row md:items-start md:justify-between md:text-base"
    >
      <span class="w-1/2">Currently Crafting Expieriences at Home</span>
      <span>(2018 - Present)</span>
    </div>
  </div>
</template>
