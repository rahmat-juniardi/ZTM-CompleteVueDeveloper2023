export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value}  text-2xl`

    if (binding.arg === 'full') {
      iconClass = binding.value
    }

    // add whitespace
    if (binding.modifiers.right) {
      iconClass += ' float-right'
    } else {
      iconClass += ' ml-3'
    }
    if (binding.modifiers.yellow) {
      iconClass += ' text-yellow-400'
    } else {
      iconClass += ' text-green-400'
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}
