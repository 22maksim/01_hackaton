import {Module} from '../core/module'
import { random } from '../utils'

export class CustomMessageModule extends Module {
    trigger(){
        const messageDiv = document.createElement('div')
        messageDiv.innerHTML = `<div>Кастомное сообщение<br>.Удалится чере 2 сек<div>`
        messageDiv.className = 'customMessage'
        messageDiv.style.background = `#${(random(1,16777215).toString(16))}`
        document.body.append(messageDiv)
        setTimeout(() => {
           messageDiv.remove() 
        }, 2000);
    }
}