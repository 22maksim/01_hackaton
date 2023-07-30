import { Module } from '../core/module'

class FigureModule extends Module {
  constructor() {}

  trigger() {
    // Метод, который запускает работу модуля
    //  показывает случайную фигуру на экране
    const figure = document.createElement('div');
    const [randomX, randomY] = this.getRandomPosition();
    let maxX = window.innerWidth;
    let maxY = window.innerHeight;
    figure.className = 'figure';
    figure.style.backgroundColor = this.getRandomColor();
    figure.style.width = this.getRandomSize() + 'px';
    figure.style.height = this.getRandomSize() + 'px';
    figure.style.position = 'absolute';
    figure.style.left = Math.min(randomX, maxX) + 'px';
    figure.style.top = Math.min(randomY, maxY) + 'px';
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
    let maxX = window.innerWidth;
    let maxY = window.innerHeight;
    let randomX = maxX * Math.random();
    let randomY = maxY * Math.random();
    return [randomX, randomY];
  }
}

export default FigureModule;