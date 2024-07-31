<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

/* onMounted(() => {
  gsap.set('#cursor', { xPercent: -50, yPercent: -50 })

  let xTo = gsap.quickTo('#cursor', 'x', { duration: 0.3, ease: 'power3' }),
    yTo = gsap.quickTo('#cursor', 'y', { duration: 0.3, ease: 'power3' })

  window.addEventListener('mousemove', (e) => {
    xTo(e.x)
    yTo(e.y)
  })
}) */

onMounted(() => {
  let cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cc-scale'),
    cursorLink = document.querySelectorAll('.cc-link'),
    cursorText = document.querySelectorAll('.cc-text'),
    cursorBtnIcon = document.querySelectorAll('.cc-btn-icon'),
    mouseX = 0,
    mouseY = 0

  gsap.to({}, 0.01, {
    repeat: -2,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      })
    },
  })

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  cursorLink.forEach((el) => {
    el.addEventListener('mousemove', () => {
      cursor?.classList.add('cursor--link')
    })

    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor--link')
    })
  })

  cursorScale.forEach((el) => {
    el.addEventListener('mousemove', () => {
      cursor?.classList.add('cursor--scale')
      if (el.classList.contains('cc-small')) {
        cursor?.classList.remove('cursor--scale')
        cursor?.classList.add('cursor--scale-small')
      }
    })

    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor--scale')
      cursor?.classList.remove('cursor--scale-small')
    })
  })

  cursorText.forEach((el) => {
    el.addEventListener('mousemove', () => {
      cursor?.classList.add('cursor--text')
    })

    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor--text')
    })
  })

  cursorBtnIcon.forEach((el) => {
    el.addEventListener('mousemove', () => {
      cursor?.classList.add('cursor--button-icon')
    })

    el.addEventListener('mouseleave', () => {
      cursor?.classList.remove('cursor--button-icon')
    })
  })
})
</script>

<template>
  <div class="cursor"></div>
</template>

<style>
* {
  /* cursor: url(/cursor.png), none !important; */
  cursor: none !important;
}

.cursor {
  pointer-events: none;
  z-index: 99999;
  width: 24px;
  height: 24px;
  background: #7d7c7a88;
  border-radius: 100%;
  transition-property: width, height, border-radius, transform;
  transition-duration: 0.1s;
  transition-timing-function: ease-out;
  position: fixed;
  left: -1000px;
  transform: translate(-50%, -50%);
  transform-origin: bottom center;
  @apply hidden md:block;
}

.cursor--link {
  transform: scale(1.5);
  background: white;
  mix-blend-mode: difference;
}

.cursor--scale,
.cursor--scale-small {
  transform: scale(4);
  background: white;
  mix-blend-mode: difference;
}
.cursor--scale-small {
  transform: scale(2);
}

.cursor--text {
  /* background: #1ecaca; */
  background: white;
  mix-blend-mode: difference;
  opacity: 0.5;
  width: 2px;
  height: 24px;
  border-radius: 2px;
}

.cursor--button-icon {
  background: white;
  mix-blend-mode: exclusion;
  width: 20px;
  height: 20px;
}
</style>
