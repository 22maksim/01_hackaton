import './styles.css';
import { ContextMenu } from './menu';

const contextMenu = new ContextMenu();

function handleContextMenu(event) {
  event.preventDefault();
  contextMenu.open(event.clientX, event.clientY);
  console.log(contextMenu);
  console.log(event);
}

document.addEventListener('contextmenu', handleContextMenu);

class Figure {
  constructor(name) {
    this.name = name;
  }
}

const figure1 = new Figure('Создать Фигуру');
//const figure2 = new Figure('Фигура 2');

contextMenu.add(figure1);
//contextMenu.add(figure2);

function handleClick() {
  contextMenu.close();
  console.log(contextMenu);
}

document.addEventListener('click', handleClick);
