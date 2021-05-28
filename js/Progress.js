class Progress {

  constructor(selector, options) {
    this.parent = document.querySelector(selector)
    this.group = options.group
    this.title = options.title
    this.value = localStorage.getItem(`${this.group}_value`) ? JSON.parse(localStorage.getItem(`${this.group}_value`)) : options.value
    this.items = localStorage.getItem(`${this.group}_items`) ? JSON.parse(localStorage.getItem(`${this.group}_items`)) : options.items

    this.renderInner()
    this.setup()
  }

  setup() {
    this.parent.addEventListener('click', this.listenItem.bind(this))
    this.parent.addEventListener('keypress', this.listenItem.bind(this))
    this.parent.addEventListener('select', this.listenItem.bind(this))
  }

  listenItem(event) {

    if (event.target.tagName === 'A') return
    
    const elem = event.target.closest('li')

    if (event.type === 'select') alert('selected')
 
    if ((elem && event.type === 'click') || (elem && event.type === 'keypress' && event.key === 'Enter')) {

      const title = elem.querySelector('.progress-item__name').textContent
      const index = this.items.findIndex((item) => item.title === title)
      const item  = this.items.find((item) => item.title === title)

      // checked
      if (item.check) {
        this.items.splice(
          index, 1,
          {
            title: title,
            check: false,
            link: item.link
          }
        )
      }

      // not checked
      if (!item.check) {
        this.items.splice(
          index, 1,
          {
            title: title,
            check: true,
            link: item.link
          }
        )
      }

      const checkedItems = this.items.filter((item) => item.check).length
      const allItems     = this.items.length
      const value        = (checkedItems / allItems * 100).toFixed(0)

      this.value = parseInt(value)

      localStorage.setItem(`${this.group}_items`, JSON.stringify(this.items))
      localStorage.setItem(`${this.group}_value`, JSON.stringify(this.value))

      this.renderHead()
      this.renderList()

    }

  }

  renderInner() {

    this.parent.insertAdjacentHTML(
      'beforeend',
      `
        <div class="progress__block-head"></div>
        <ul class="progress__block-list"></ul>
      `
    )

    this.renderHead()
    this.renderList()

  }

  renderHead() {

    const head = this.parent.querySelector('.progress__block-head')

    head.innerHTML = `
      <h3 class="progress__block-title">${this.title}</h3>
      <h4 class="progress__block-value ${this.value === 100 ? 'progress__block-value--full' : ''}">${this.value}%</h4>
    `

  }

  renderList() {

    const list = this.parent.querySelector('.progress__block-list')
    const html = this.items.map((item) => this.renderItem(item)).join('')

    list.innerHTML = html

  }

  renderItem(item) {

    const itemClass = item.check ? 'progress-item--checked' : ''
    const itemCheck = item.check ? 'checked' : ''
    const itemTitle = item.title
    const itemLink  = item.link

    return `
      <li class="progress-item ${itemClass}" tabindex="0">
        <div class="progress-item__body">
          <input class="progress-item__check" readonly type="checkbox" ${itemCheck}/>
          <div class="progress-item__name">${itemTitle}</div>
        </div>
        <a class="progress-item__link" href="${itemLink}" target="_blank">Подробнее</a>
      </li>
    `

  }

}