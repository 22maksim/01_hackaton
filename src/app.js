import './styles.css';
import { ContextMenu } from './menu';

const contextMenu = new ContextMenu();

function handleContextMenu(event) {
  event.preventDefault();
  contextMenu.open(event.clientX, event.clientY);
}

document.addEventListener('contextmenu', handleContextMenu);

function handleClick() {
  contextMenu.close();
}

document.addEventListener('click', handleClick);
