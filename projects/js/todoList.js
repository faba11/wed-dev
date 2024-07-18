// todos
        let elementArr = [];

        let todoTask = document.querySelector('.todoElement');
        let dateElement = document.querySelector('.date');
        let errorMeg = document.querySelector('#error');

        // TO RENDER DATA FROM LOCAL STORAGE
        let store = JSON.parse(localStorage.getItem('store')) || [];
        for (let i = 0; i < store.length; i++) {
            elementArr.push(store[i]);
            rendTodoList();
        }

        //function to render todo list
        function rendTodoList() {
            let todoList = document.querySelector('.container');
            todoList.innerHTML = '';

            for (let i = 0; i < elementArr.length; i++) {
                let todoObj = elementArr[i]
                const { name, dueDate } = todoObj;

                const html =
                    `<div>${name}</div>
                    <div>${dueDate}</div>
                    <button onclick="deleteTodo(${i})">Delete</button>`;
                todoList.innerHTML += html;
            }

            localStorage.setItem('store', JSON.stringify(elementArr))
        }

        //function to add todo
        function addTodo() {
            let name = todoTask.value.trim();
            let dueDate = dateElement.value.trim();


            let currentDate = new Date();
            let taskDate = currentDate.toISOString().split('T')[0];

            let isValue = true;

            if (!name || !dueDate) {
                errorMeg.innerHTML = `Error: Name and due date are required`;

                setTimeout(() => {
                    errorMeg.style.display = 'none'
                }, 3000)
                isValue = false;

            } else if (dueDate < taskDate) {
                errorMeg.innerHTML = `Error date is in the past ${dueDate}`;
                setTimeout(() => {
                    errorMeg.style.display = 'none'
                }, 3000);
                isValue = false;

            }

            // if value is true add todo push in array
            if (isValue) {
                elementArr.push({ name, dueDate });
                rendTodoList();
                todoTask.value = '';
                dateElement.value = '';
            }

            localStorage.setItem('store', JSON.stringify(elementArr))
        }

        // function to delete todo
        function deleteTodo(index) {
            elementArr.splice(index, 1);
            rendTodoList();

            localStorage.setItem('store', JSON.stringify(elementArr))
        }

        // function to add enter key functionality to it.
        function keyFunc(event) {
            if (event.key == 'Enter') {
                addTodo()
            }
        }

        // event listener for enter key
        todoTask.addEventListener('keypress', keyFunc);
        dateElement.addEventListener('keypress', keyFunc);