import { ref, watch } from 'vue'

interface DarkThemeSwitcherOptions {
  initialValue?: boolean
}

const useDarkThemeSwitcher = (options: DarkThemeSwitcherOptions = {}) => {
  const darkMode = ref(
    options.initialValue !== undefined
      ? options.initialValue
      : !!localStorage.getItem('darkMode'),
  )

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    if (darkMode.value) {
      localStorage.setItem('darkMode', darkMode.value.toString())
    } else {
      localStorage.removeItem('darkMode')
    }
  }

  watch(darkMode, (newDarkMode) => {
    document.documentElement.classList.toggle('dark', newDarkMode)
  })

  return { darkMode, toggleDarkMode }
}

export default useDarkThemeSwitcher
