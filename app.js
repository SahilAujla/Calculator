// typing letters in the console

let button = document.querySelectorAll('.btn');
let display = document.querySelector('.display');

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', type);
}

document.addEventListener('keydown', keypress);

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


// adding keyboard support

function keypress(e) {

    if (e.key === 'Backspace') {
        if (display.textContent.length === 1) {
            display.textContent = '0';
            return
        }
        let textToDisplay = display.textContent.slice(0, display.textContent.length - 1);
        display.textContent = textToDisplay;
        return
    }

    if (e.key === 'Enter') {
        if (!display.textContent.includes('÷') && !display.textContent.includes('%') && !display.textContent.includes('x') && !display.textContent.includes('+') && !display.textContent.includes('-') && !display.textContent.includes('x')) {
            return
        }
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
    

    if (e.key === '%') {
        if (display.textContent[display.textContent.length-1] === '%') {
            return
        }
        display.textContent += '%';
        return
    }


    if (e.key === '/') {
        if (display.textContent[display.textContent.length-1] === '÷') {
            return
        }
        display.textContent += '÷';
        return
    }
    

    if (e.key === '*') { 
        if (display.textContent[display.textContent.length-1] === '×') {
            return
        }
        display.textContent += 'x';
        return
    }
    

    if (e.key === '-') { 
        if (display.textContent[display.textContent.length-1] === '-') {
            return
        }
        display.textContent += '-';
        return
    }


    if (e.key === '+') {
        if (display.textContent[display.textContent.length-1] === '+') {
            return
        }
        display.textContent += '+';
        return
    }


    if (display.textContent === '0') {
        display.textContent = '';
    }


    if (e.key === '.') {
        if (display.textContent[display.textContent.length-1] === '.') {
            return
        }
        display.textContent += '.';
        return
    }


    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = '';
    }

    if (e.shiftkey === '8') {
        console.log('hi');
    }

    if (e.key !== '1' && e.key !== '2' && e.key !== '3' && e.key !== '4' && e.key !== '5' && e.key !== '6' && e.key !== '7' && e.key !== '8' && e.key !== '9' && e.key !== '0' && e.key !== '.' && e.key !== 'Backspace' && e.key !== '+' && e.key !== '-' && e.key !== '*' && e.key !== '/' && e.key !== '%' && e.key !== 'Enter') {
        return
    }

    display.textContent += e.key;
}