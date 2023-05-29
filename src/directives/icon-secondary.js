export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} text-green-400 text-2xl`

    // add whitespace
    if (binding.modifiers.right) {
      iconClass += ' float-right'
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}
