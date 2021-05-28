class Menu {
  
  constructor(options) {
    this.menu = document.querySelector('.menu')
    this.list = options.list

    this.renderBurger()
    this.renderList()
    this.setup()
  }

  setup() {
    this.menu.addEventListener('click', this.listenMenu.bind(this))
  }

  listenMenu(event) {
    
    if (event.target.tagName === 'A') {

      event.preventDefault()

      const link = event.target
      const href = link.getAttribute('href')
      const elem = document.querySelector(href)
      const dist = elem.getBoundingClientRect().top
      
      window.scrollBy({
        behavior: 'smooth',
        top: dist - 80
      })

      this.menu.querySelector('.burger').classList.toggle('burger--active')
      this.menu.querySelector('.menu__drop').classList.toggle('menu__drop--down')

    }

    if (event.target.closest('.burger')) {

      this.menu.querySelector('.burger').classList.toggle('burger--active')
      this.menu.querySelector('.menu__drop').classList.toggle('menu__drop--down')

    }

  }

  renderBurger() {

    this.menu.insertAdjacentHTML(
      'beforeend',
      `
        <button class="burger">
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      `
    )

  }

  renderList() {

    this.menu.insertAdjacentHTML(
      'beforeend',
      `
        <div class="menu__drop">
          <ul class="menu__list">
            ${this.list.map((link) => this.renderLink(link)).join('')}
          </ul>
        </div>
      `
    )

  }

  renderLink(link) {
    return `
      <li class="menu__item">
        <a class="menu__link" href="${link.href}">${link.text}</a>
      </li>
    `
  }

}