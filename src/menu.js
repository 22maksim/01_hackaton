import { Menu } from './core/menu';
import FigureModule from './modules/figureModel';
import { BackgroundModule } from './modules/background.module'

export class ContextMenu extends Menu {
  constructor() {
    super();
    this.menuElement = null;
    this.items = []
  }
  
  open(x, y) {
    // if (this.items.length === 0) { // если оставить это ,то не будет проходить проверка - при создании контекст меню массив items пустой
    //   return;
    // }
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
    this.items.push(item);
  }

  createMenu() {
    this.add(new BackgroundModule('background','Поменять цвет'))
    this.add(new FigureModule('figure','Создать фигуру')) 
    //здесь можно добалять любые модули, создавая экземпляр класса и импортируя модуль из папки модулей

    // Создаем DOM элемент для меню
    this.menuElement = document.createElement('ul');
    this.menuElement.className = 'context-menu';
    // Добавляем элементы меню в DOM
    for (let item of this.items) {
      const menuItem = document.createElement('li');
      menuItem.innerHTML = item.toHTML();
      menuItem.addEventListener('click', () => {
        // Вызываем метод trigger() соответствующего модуля при клике на пункт меню
        item.trigger()
        this.close();
      });
      this.menuElement.appendChild(menuItem);
    }
    // Добавляем меню в DOM дерево
    document.body.appendChild(this.menuElement);
  }
}