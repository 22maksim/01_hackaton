import './styles.css';
import { ContextMenu } from './menu';

const contextMenu = new ContextMenu('.menu');

function handleContextMenu(event) {
  event.preventDefault();
  contextMenu.open(event.clientX, event.clientY);
}

document.addEventListener('contextmenu', handleContextMenu);

function handleClick() {  //core main.js strings 6-12?
  contextMenu.close();
}

document.addEventListener('click', handleClick);