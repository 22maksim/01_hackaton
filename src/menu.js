import { Menu } from './core/menu';
import FigureModule from './figureModule';

export class ContextMenu extends Menu {
  constructor() {
    super();
    this.items = ['Создать фигуру', '...'];
    this.menuElement = null;
    this.figureModule = new FigureModule();
  }

  open(x, y) {
    if (this.items.length === 0) {
      return;
    }
    if (!this.menuElement) {
      this.createMenu();
    }

    this.menuElement.style.left = x + 'px';
    this.menuElement.style.top = y + 'px';
    this.menuElement.style.display = 'block';
  }

  close() {
    if (this.menuElement) {
      this.menuElement.style.display = 'none';
    }
  }

  add(item) {
    // this.items.push(item);
  }

  createMenu() {
    // Создаем DOM элемент для меню
    this.menuElement = document.createElement('ul');
    this.menuElement.className = 'context-menu';
    // Добавляем элементы меню в DOM
    for (let item of this.items) {
      const menuItem = document.createElement('li');
      menuItem.textContent = item;
      menuItem.addEventListener('click', () => {
        // Вызываем метод trigger() соответствующего модуля при клике на пункт меню
        this.figureModule.trigger();
        this.close();
      });
      this.menuElement.appendChild(menuItem);
    }
    // Добавляем меню в DOM дерево
    document.body.appendChild(this.menuElement);
  }
}
