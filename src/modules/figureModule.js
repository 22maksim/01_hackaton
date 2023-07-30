import { Module } from '../core/module'

class FigureModule extends Module {
    // constructor() {}
  
    trigger() {
      // Метод, который запускает работу модуля
      //  показывает случайную фигуру на экране
      const figure = document.createElement('div');
      figure.className = 'figure';
      figure.style.backgroundColor = this.getRandomColor();
      figure.style.width = this.getRandomSize() + 'px';
      figure.style.height = this.getRandomSize() + 'px';
      figure.style.position = 'absolute';
      figure.style.left = this.getRandomPosition() + 'px';
      figure.style.top = this.getRandomPosition() + 'px';
      document.body.appendChild(figure);
    }
  
    getRandomColor() {
      // Генерация случайного цвета в формате RGB
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    getRandomSize() {
      // Генерация случайного размера фигуры
      return Math.floor(Math.random() * 100) + 50;
    }
  
    getRandomPosition() {
      // Генерация случайной позиции фигуры
      return Math.floor((window.innerWidth - 100) * Math.random());
    }
  }
  
  export default FigureModule;