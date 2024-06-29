document.addEventListener('DOMContentLoaded', function() {
    let saveDta = JSON.parse(localStorage.getItem('tasks')) || [];
    let ul = document.querySelector('.list');

    saveDta.forEach(task => {
        let li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li)
    });

    //remove data from localStorage
    let clearButton = document.querySelector('.clear-data');
    clearButton.addEventListener('click', () => {
        let ulData = document.querySelector('.list');
        if (ulData.textContent.length > '') {
            ulData.innerHTML = '';
            localStorage.clear();
        }
    });

    //add to list when  Enter key is pressed
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            add();
        }
    })
});

function add() {
    let inputValue = document.querySelector('.tasks').value;
    if (inputValue !== '') {
        let li = document.createElement('li');
        li.textContent = inputValue;
        let ul = document.querySelector('.list');
        ul.appendChild(li);
        //Clear input filed on click
        document.querySelector('.tasks').value = '';

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(inputValue);
        localStorage.setItem('tasks', JSON.stringify(tasks));

    } else {
        alert("Please enter a task");
    }
    let button = document.querySelector('button');
    button.addEventListener('click', function add() {
        this.value = '';
    })
};