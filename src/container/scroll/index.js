window.buttonScroll.onclick = () =>
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })

let isDisplay = false

setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    isDisplay = true
    window.buttonScroll.style.display = 'flex' //TODO доступ к свойствам CSS
    return null
  }

  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false
    window.buttonScroll.style.display = 'none'
    return null
  }
}, 500)
