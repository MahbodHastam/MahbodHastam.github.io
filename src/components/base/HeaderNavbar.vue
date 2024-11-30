<script setup lang="ts">
import { cn, copy } from '@/utils'
import { useRoute } from 'vue-router'
import data from '@/data.json'
import { inject, ref } from 'vue'

const emit = defineEmits(['toggleDarkMode'])
const route = useRoute()

const items = [
  { label: 'About', href: '/' },
  // { label: 'Work', href: '/work' },
]

const emailWrapperEl = ref<HTMLElement>()
const showEmail = ref(true)
const darkMode = inject('darkMode', ref(!!localStorage.getItem('darkMode')))

const copyEmail = () => {
  copy(data.email)

  if (!emailWrapperEl.value) return

  emailWrapperEl.value.style.backgroundColor = '#bbf7d099'
  showEmail.value = false

  setTimeout(() => {
    if (emailWrapperEl.value) {
      emailWrapperEl.value.style.backgroundColor = ''
      emailWrapperEl.value.classList.add('dark:bg-[#2a2a2a]')
      emailWrapperEl.value.classList.add('bg-white')
      if (darkMode.value) {
        // emailWrapperEl.value.style.backgroundColor = '#2a2a2a'
      } else {
        // emailWrapperEl.value.style.backgroundColor = '#ffffff'
      }
      showEmail.value = true
    }
  }, 1000)
}
</script>

<template>
  <div
    id="navbar"
    class="fixed left-0 right-0 top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-all delay-100 duration-200 md:px-4 dark:bg-transparent"
  >
    <div class="container relative">
      <div
        class="flex justify-center text-nowrap py-6 font-semibold text-text transition-colors delay-200 lg:justify-between dark:text-gray-50"
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
            class="inline-flex w-[245.13px] items-center rounded-full bg-white pl-4 text-sm transition-all delay-150 duration-100 ease-linear dark:bg-[#2a2a2a]"
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
      <button
        @click.prevent="emit('toggleDarkMode')"
        class="absolute right-7 top-7 rounded-full bg-background text-sm text-[#7a7a7a] transition-all duration-200 hover:text-[#5a5a5a] lg:right-3 lg:top-20 dark:bg-transparent dark:text-gray-50 dark:hover:text-gray-300"
      >
        <Transition name="fade" mode="out-in">
          <Icon v-if="darkMode" icon="solar:moon-sleep-bold" class="h-5 w-5" />
          <Icon v-else icon="solar:sun-2-bold-duotone" class="h-5 w-5" />
        </Transition>
      </button>
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
