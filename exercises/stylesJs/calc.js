let displayBnt = document.querySelector('.displayCal');

let btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let btnText = e.target.innerText;

        if (btnText == 'C') {
            displayBnt.innerText = '0';
        } else if (btnText == '=') {
            try {
                displayBnt.innerText = eval(displayBnt.innerText).toFixed(3);
            } catch {
                displayBnt.innerText = 'Error';
            }
        } else {
            if (displayBnt.innerText == '0' || displayBnt.innerText == 'Error') {
                displayBnt.innerText = '';
            }

            let lastChar = displayBnt.innerText.slice(-1);
            if (['+', '-', '*', '/'].includes(btnText)) {
                if (['+', '-', '*', '/'].includes(lastChar)) {
                    displayBnt.innerText = displayBnt.innerText.slice(0, -1) + btnText;
                } else {
                    displayBnt.innerText += btnText;
                }
                // displayBnt.innerText += btnText;
            } else if (btnText == '.') {
                if (!displayBnt.innerText.split(/[+\-*/]/).pop().includes('.')) {
                    displayBnt.innerText += btnText;
                }
            } else {
                displayBnt.innerText += btnText;
            }
        }
    })
})