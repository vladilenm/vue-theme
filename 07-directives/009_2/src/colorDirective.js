let interval
let defaultColor

const mouseover = event => {
  event.target.style.color = 'red'
}

const mouseout = event => {
  event.target.style.color = defaultColor
}

export default {
  mounted(el, binding) {
    console.log(el)
    console.log(binding)

    defaultColor = binding.value

    el.style[binding.arg] = binding.value

    if (binding.modifiers.blink) {
      let flag = true
      interval = setInterval(() => {
        el.style.color = flag ? '#fff' : binding.value
        flag = !flag
      }, 1000)
    }

    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },

  updated(el, binding) {
    el.style[binding.arg] = binding.value
  },

  unmounted(el) {
    console.log('unmounted')
    if (interval) {
      clearInterval(interval)
    }

    el.removeEventListener('mouseover', mouseover)
    el.removeEventListener('mouseout', mouseout)
  }
}