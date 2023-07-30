import './styles.css';
import { ContextMenu } from './menu';
import { Calculator } from './modules/calculator';

const contextMenu = new ContextMenu();
const calculator = new Calculator();
// calculator.trigger();


function handleContextMenu(event) {
  event.preventDefault();
  contextMenu.open(event.clientX, event.clientY);
}

document.addEventListener('contextmenu', handleContextMenu);

function handleClick() {
  contextMenu.close();
}

document.addEventListener('click', handleClick);
