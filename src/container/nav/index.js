class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #back = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return location.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #go = () => {
    // return this.#changePage(window.input.value)
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Введите корректный URL адрес')
      console.log(e)
    }
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  //TODO тут мы по-другому привязываем функции к тегам, чем в js-calc
  //* bind(this) нужно использовать, если методы выше не стрелочные!!! (т е тут это не нужно), например window.go.onclick = this.#go.bind(this)
  static init = () => {
    window.back.onclick = this.#back.bind(this)
    window.forward.onclick = this.#forward.bind(this)
    window.reload.onclick = this.#reload.bind(this)
    window.home.onclick = this.#home.bind(this)
    window.go.onclick = this.#go.bind(this)

    window.input.value = location.href
  }
}

Nav.init()
