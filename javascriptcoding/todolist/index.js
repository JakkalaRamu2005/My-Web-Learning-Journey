let todoList = document.getElementById("todo-list-container");
let buttonEl = document.getElementById("button");
let ErrorEl = document.getElementById("error-msg");



let inputEl = document.getElementById('input');

buttonEl.onclick = function () {

    let inputVal = inputEl.value;
    // console.log(inputVal);


    if (inputVal !== "") {

        let todoItem = document.createElement("li");
        todoItem.textContent = inputVal;
        todoItem.classList.add("todo-item");





        let btnEl = document.createElement('button');
        let divEl = document.createElement('div');
        divEl.classList.add('items-container');



        btnEl.textContent = "remove";
        todoList.classList.add('flex');

        divEl.appendChild(todoItem);
        divEl.appendChild(btnEl);

        todoList.appendChild(divEl);
      
        inputEl.value ="";
        ErrorEl.textContent="";

    }else{
        let errorText = "please Enter the text";
        ErrorEl.textContent = errorText;
        ErrorEl.style.color = "red";

    }

}

