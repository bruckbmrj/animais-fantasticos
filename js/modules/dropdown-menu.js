import outsideClick from './clickoutside.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    /* Define touchstart e click como argmento padrão
    de events caso o usuário não define */
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  /* Ativa o dropdownmenu e adiciona
  a função que observa o clique fora dele */
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    this.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach(() => {
        menu.addEventListener('click', this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
