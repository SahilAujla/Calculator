// typing letters in the console

let button = document.querySelectorAll('.btn');
let display = document.querySelector('.display');
let body = document.querySelector('.calculator');

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', type);
}

calculator.addEventListener('keypress', keypress);

function type(e) {
    if (e.target.classList.contains('operation-AC')) {
        display.textContent = '0';
        return
    }


    if (e.target.classList.contains('operation-C')) {
        if (display.textContent.length === 1) {
            display.textContent = '0';
            return
        }
        let textToDisplay = display.textContent.slice(0, display.textContent.length - 1);
        display.textContent = textToDisplay;
        return
    }

    if (e.target.classList.contains('equals')) {
        if (display.textContent.includes('÷')) {
            let a = display.textContent.split('÷');
            let x = a[0];
            let y = a[1];
            if (y === '0') {
                display.textContent = 'Error';
                return
            }
            let result = x / y;
            display.textContent = result;
            return;
        }


        if (display.textContent.includes('%')) {
            let a = display.textContent.split('%');
            let x = a[0];
            let y = a[1];
            let result = (x / 100) * y;
            display.textContent = result;
            return;
        }

        
        if (display.textContent.includes('x')) {
            let a = display.textContent.split('x');
            let x = a[0];
            let y = a[1];
            let result = x  * y;
            display.textContent = result;
            return;
        }


        if (display.textContent.includes('+')) {
            let a = display.textContent.split('+');
            let x = a[0];
            let y = a[1];
            let result = Number(x)  + Number(y);
            display.textContent = result;
            return;
        }

        
        if (display.textContent.includes('-')) {
            let a = display.textContent.split('-');
            let x = a[0];
            let y = a[1];
            let result = x  - y;
            display.textContent = result;
            return;
        }
    }


    if (display.textContent.length >= 9) {
        display.textContent = display.textContent.slice(0, 9);
        return
    }
    

    if (e.target.classList.contains('operation-%')) {
        if (display.textContent[display.textContent.length-1] === '%') {
            return
        }
        display.textContent += '%';
        return
    }


    if (e.target.classList.contains('operation-÷')) {
        if (display.textContent[display.textContent.length-1] === '÷') {
            return
        }
        display.textContent += '÷';
        return
    }
    

    if (e.target.classList.contains('operation-x')) { 
        if (display.textContent[display.textContent.length-1] === '×') {
            return
        }
        display.textContent += 'x';
        return
    }
    

    if (e.target.classList.contains('operation--')) { 
        if (display.textContent[display.textContent.length-1] === '-') {
            return
        }
        display.textContent += '-';
        return
    }


    if (e.target.classList.contains('operation-+')) {
        if (display.textContent[display.textContent.length-1] === '+') {
            return
        }
        display.textContent += '+';
        return
    }


    if (display.textContent === '0') {
        display.textContent = '';
    }


    if (e.target.classList.contains('decimal')) {
        if (display.textContent[display.textContent.length-1] === '.') {
            return
        }
        display.textContent += '.';
        return
    }


    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = '';
    }


    display.textContent += e.target.textContent;
}


function keypress(e) {
    console.log(e.target.value);
}