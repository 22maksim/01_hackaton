import {Module} from '../core/module'

export class CustomMessageModule extends Module {
    trigger(){
        const messageDiv = document.createElement('div')
        messageDiv.innerHTML = `<div>Кастомное сообщение<br>.Удалится чере 2 сек<div>`
        messageDiv.className = 'customMessage'
        document.body.append(messageDiv)
        setTimeout(() => {
           messageDiv.remove() 
        }, 2000);
    }
}