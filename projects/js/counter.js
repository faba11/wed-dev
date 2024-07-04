let conuter = document.getElementById('counter');
let count = 0;
function increase() {
    count++;
    conuter.innerHTML = count;
}

function decrease() {
    count--;
    conuter.innerHTML = count;
}

function reset() {
    count = 0;
    conuter.innerHTML = count;
}