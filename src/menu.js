import { Menu } from './core/menu';
import FigureModule from './modules/figureModel';
import { BackgroundModule } from './modules/background.module'
import { CustomMessageModule } from './modules/customMessageModule';
import { RateBitcoin } from './modules/rate-bitcoin';
import { Module } from './core/module';
import { Calculator } from './modules/calculator';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
    this.items = []
  }

  open(x, y) {
    const elLi = document.querySelector('.menu-item');
    if (!elLi) {
      this.createMenu()
    }
    this.el.style.left = x + 'px'
    this.el.style.top = y + 'px'
    this.el.style.display = 'block'
  }

  close() {
    this.el.style.display = 'none'
  }

  add(item) {
    if (item instanceof Module) {
      this.items.push(item)
    } else {
      console.log('Invalid module');
    }
  }

  async createMenu() {
    // Sklad
    this.add(new Calculator('calculatщк', 'калькулятор'))
    this.add(new RateBitcoin('modal', 'Курс биткоина'))
    this.add(new BackgroundModule('background','Поменять цвет'))
    this.add(new FigureModule('figure','Создать фигуру')) 
    this.add(new CustomMessageModule('customMessage','Кастомное сообщение'))
    // Добавляем элементы меню в DOM
    for (let item of this.items) {
      const menuItem = item.toHTML()
      this.el.insertAdjacentHTML('afterbegin', menuItem)
      const typeData = item.type
      const search = document.querySelector(`li[data-type="${typeData}"]`)
      search.addEventListener('click', () => {
        item.trigger()
        this.close()
      });
    }
  }
}