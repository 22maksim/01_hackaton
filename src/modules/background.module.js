import {Module} from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
    trigger(){
        document.querySelector('body').style.backgroundColor = `#${(random(1,16777215).toString(16))}`
    }
}