let count = 1;

function update() {
    let displayValue = document.querySelector('p');
    displayValue.textContent = count;

    let saveDate = JSON.parse(localStorage.getItem("save")) || [];
    saveDate.push(count);
    localStorage.setItem("save", JSON.stringify(saveDate));
}

function increment() {
    count += 2;
    update();
}

function decrement() {
    count -= 2;
    update();
}

function reset() {
    count = 0;
    update();
    localStorage.removeItem('save');

    // Clear the dataDisplay div by removing all child elements
    let dataDisplay = document.querySelector('.data-display');
    while (dataDisplay.firstChild) {
        dataDisplay.removeChild(dataDisplay.firstChild);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let saveDate = JSON.parse(localStorage.getItem("save")) || [];
    let dataDisplay = document.querySelector('.data-display');
    saveDate.forEach(element => {
        let storeItems = document.createElement('p');
        storeItems.textContent = element;
        dataDisplay.append(storeItems);
    });

    // Initial update of the display
    update();
});