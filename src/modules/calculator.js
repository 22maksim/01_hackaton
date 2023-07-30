import { Module } from '../core/module';

export class Calculator extends Module(){
    constructor() { 
        super(); 
    }
    trigger(){
        let number1 = '';
        let number2 = '';
        let sign = '';

        let divContur = document.createElement('div');
        divContur.className = 'contur';
        document.body.append(divContur);

        let inputScreen = document.createElement('input');
        inputScreen.className = 'screen';
        divContur.prepend(inputScreen);

        let divButtons = document.createElement('div');
        divButtons.className = 'buttom';
        divContur.append(divButtons);

        function buttomSymbol () {

        let buttomC = document.createElement('div');
        buttomC.id = 'elements';
        buttomC.className = 'buttom_C';
        buttomC.textContent = 'C';
        divButtons.append(buttomC);

        let multiply = document.createElement('div');
        multiply.id = 'elements';
        multiply.className = 'buttom_symbol';
        multiply.textContent = '*';
        divButtons.append(multiply);

        let division = document.createElement('div');
        division.id = 'elements';
        division.className = 'buttom_symbol';
        division.textContent = '/';
        divButtons.append(division);

        let minus = document.createElement('div');
        minus.id = 'elements';
        minus.className = 'buttom_symbol';
        minus.textContent = '-';
        divButtons.append(minus);

        for (let i = 1; i < 4; i++){
            let buttom = document.createElement('div');
            buttom.id = 'elements';
            buttom.className = 'buttom_number';
            buttom.textContent = i;
            divButtons.append(buttom);
        }

        let plus = document.createElement('div');
        plus.id = 'elements';
        plus.className = 'buttom_symbol';
        plus.textContent = '+';
        divButtons.append(plus);

        for (let i = 4; i < 7; i++){
            let buttom = document.createElement('div');
            buttom.id = 'elements';
            buttom.className = 'buttom_number';
            buttom.textContent = i;
            divButtons.append(buttom);
        }

        let square = document.createElement('div');
        square.id = 'elements';
        square.className = 'buttom_symbol';
        square.textContent = '**';
        divButtons.append(square);

        for (let i = 7; i < 10; i++){
            let buttom = document.createElement('div');
            buttom.id = 'elements';
            buttom.className = 'buttom_number';
            buttom.textContent = i;
            divButtons.append(buttom);
        }

        let dot = document.createElement('div');
        dot.id = 'elements';
        dot.className = 'buttom_number';
        dot.textContent = '.';
        divButtons.append(dot);

        let buttom = document.createElement('div');
        buttom.id = 'elements';
        buttom.className = 'buttom_number';
        buttom.textContent = '0';
        divButtons.append(buttom);

        let equals = document.createElement('div');
        equals.id = 'elements';
        equals.className = 'buttom_equals';
        equals.textContent = '=';
        divButtons.append(equals);
        }
        buttomSymbol();

        let input = document.querySelector('.screen');
        let element = document.querySelectorAll('#elements');

        function calculation (){
            element.forEach(elem => {
                elem.addEventListener('click', (event) =>{
                let meaning = event.target.textContent;
                    if(event.target.classList.contains('buttom_number')) {
                        if (number2 == '' && sign == ''){
                            input.value += meaning;
                            number1 += meaning;
                            console.log(number1);
                        }
                        if (number1 !== '' && sign !== ''){
                            input.value += meaning;
                            number2 += meaning;
                            console.log(number2);
                        }
                        return;
                    }
                        if(event.target.classList.contains('buttom_symbol')) {
                        input.value += meaning;
                        sign = meaning;
                        console.log(sign);
                    }
                    if(event.target.classList.contains('buttom_equals')) {
                        input.value = '';
                        switch (sign){
                            case '+': input.value = +number1 + +number2;
                            break;
                            case '-': input.value = +number1 - +number2;
                            break;
                            case '*': input.value = +number1 * +number2;
                            break;
                            case '/': input.value = +number1 / +number2;
                            break;
                            case '**': input.value = Math.pow(+number1, +number2)
                            break;
                            default: 
                            break;
                        }
                        number1 = input.value;
                        number2 = '';
                    }
                })
            });
        }
        calculation();
            
        document.querySelector('.buttom_C').addEventListener('click', () =>{
            number1 = '';
            number2 = '';
            sign = '';
            input.value = '';
        });

        document.addEventListener( "click", () => {
            document.body.style.background = '#D0D0D0';
            divContur.removeAttribute('hidden');
        });

        document.oncontextmenu = () => {
            return false;
        };

        document.addEventListener( "contextmenu", () => {
            document.body.style.background = 'none';
            divContur.setAttribute('hidden', '');
        });
    }
}

// const calculator = new Calculator();
// calculator.trigger();










