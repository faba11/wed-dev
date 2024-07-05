let counter = document.getElementById('counter');


let count = JSON.parse(localStorage.getItem("count")) || 0;

counter.innerHTML = count;

function increase() {
    count++;
    counter.innerHTML = count;
    localStorage.setItem("count", JSON.stringify(count));
}

function decrease() {
    count--;
    counter.innerHTML = count;
    localStorage.setItem("count", JSON.stringify(count));
}

function reset() {
    count = 0;
    counter.innerHTML = count;
    localStorage.removeItem("count");
}