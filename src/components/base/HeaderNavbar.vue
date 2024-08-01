<script setup lang="ts">
import { cn } from '@/utils'
import { useRoute } from 'vue-router'
import data from '@/data.json'
import { ref } from 'vue'

const route = useRoute()

const items = [
  { label: 'About', href: '/' },
  { label: 'Work', href: '/work' },
]

const emailWrapperEl = ref<HTMLElement>()
const showEmail = ref(true)

const copyEmail = () => {
  navigator.clipboard.writeText(data.email)

  if (!emailWrapperEl.value) return

  emailWrapperEl.value.style.backgroundColor = '#bbf7d099'
  showEmail.value = false

  setTimeout(() => {
    if (emailWrapperEl.value) {
      emailWrapperEl.value.style.backgroundColor = '#ffffff'
      showEmail.value = true
    }
  }, 1000)
}
</script>

<template>
  <div
    id="navbar"
    class="fixed left-0 right-0 top-0 z-50 w-full bg-gradient-to-b from-background/80 to-background backdrop-blur-md md:px-4"
  >
    <div class="container">
      <div
        class="flex justify-center text-nowrap py-6 font-semibold text-text lg:justify-between"
      >
        <div
          class="flex flex-col items-center gap-4 uppercase sm:flex-row sm:gap-16"
        >
          <h1 class="text-lg sm:text-xl">Mahbod Ahmadi</h1>
          <!-- <nav class="space-x-8">
            <RouterLink
              v-for="item in items"
              :key="item.label"
              :to="item.href"
              :class="
                cn([
                  'cc-link relative text-sm duration-700 after:pointer-events-none after:invisible after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-2/6 after:-translate-x-1/2 after:cursor-default after:rounded-full after:bg-transparent after:transition-all sm:text-lg',
                  route.path === item.href && `after:visible after:bg-text`,
                ])
              "
            >
              {{ item.label }}
            </RouterLink>
          </nav> -->
        </div>
        <div class="hidden items-center gap-4 lg:flex">
          <p class="uppercase">Let's Connect</p>
          <div
            ref="emailWrapperEl"
            class="inline-flex w-[245.13px] items-center rounded-full bg-white pl-4 text-sm duration-200"
          >
            <div class="flex-1 text-center">
              <Transition name="fade" mode="out-in">
                <a
                  v-if="showEmail"
                  :href="`mailto:${data.email}`"
                  class="duration-200 hover:text-[#7a7a7a]"
                  >{{ data.email }}</a
                >
                <span v-else class="inline-flex items-center gap-1 font-medium">
                  <Icon icon="tabler:check" class="h-4 w-4" />
                  Copied
                </span>
              </Transition>
            </div>
            <button
              @click="copyEmail"
              :class="
                cn([
                  'cc-btn-icon p-2.5 pr-4 align-middle text-[#7a7a7a] duration-200 hover:text-[#5a5a5a]',
                  !showEmail && 'invisible opacity-0',
                ])
              "
            >
              <Icon icon="tabler:copy" class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition duration-200;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

/* .fade-enter-to,
.fade-leave-from {
  @apply opacity-0;
} */
</style>
