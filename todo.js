const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    li.remove();
    console.log(toDos);
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const btn = document.createElement("button");
    btn.innerHTML = "X";

    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);

    btn.addEventListener("click", deleteToDo);
}

function handleToSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";

    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }

    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();

}

todoForm.addEventListener("submit", handleToSubmit);

let savedToDos = localStorage.getItem("todos");
if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);

    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        paintToDo(element);
    })
}


