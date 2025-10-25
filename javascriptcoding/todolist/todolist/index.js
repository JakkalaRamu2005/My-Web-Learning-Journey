let todoList = document.getElementById("todo-list-container");
let buttonEl = document.getElementById("button");
let ErrorEl = document.getElementById("error-msg");
let inputEl = document.getElementById('input');


let todosArray = [];



function loadTodos(){
    let saveTodos = localStorage.getItem("todos");

    if(saveTodos !== null){
        todosArray = JSON.parse(saveTodos);

        todosArray.forEach(function(todoText){
            createTodoElement(todoText);
        })
    }
}

function saveTodos() {

    let stringifiedTodos = JSON.stringify(todosArray);
    localStorage.setItem("todos", stringifiedTodos);
}




function createTodoElement(todoText) {

    let todoItem = document.createElement("li");
    todoItem.textContent = todoText;
    todoItem.classList.add("todo-item");
    let btnEl = document.createElement('button');

    let divEl = document.createElement('div');
    // divEl.classList.add('items-container');
    btnEl.textContent = "remove";
    todoList.classList.add('flex');

    let checkboxEl = document.createElement('input');
    checkboxEl.type = "checkbox";
    // console.log(btnEl.textContent);
    divEl.appendChild(checkboxEl);
    divEl.appendChild(todoItem);
    divEl.appendChild(btnEl);
    todoList.appendChild(divEl);
    btnEl.onclick = function () {

        todoList.removeChild(divEl);

    }
}


buttonEl.onclick = function () {

    let inputVal = inputEl.value;
    // console.log(inputVal);
    if (inputVal !== "") {
        todosArray.push(inputVal);
        createTodoElement(inputVal);


        saveTodos();
        inputEl.value = "";
        ErrorEl.textContent = "";

    } else {
        let errorText = "please Enter the text";
        ErrorEl.textContent = errorText;
        ErrorEl.style.color = "red";

    }

}

loadTodos();