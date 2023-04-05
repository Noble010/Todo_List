window.addEventListener('load', () =>{
    const form = document.querySelector("#todo-form");
    const input = document.querySelector("#todo-input");
    const list_el = document.querySelector("#todos");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const todo = input.value;
        if (!todo){
            alert ('pls fill out the todo')
            return;
        }

        const todo_el = document.createElement("div");
        todo_el.classList.add("todo");

        const todo_content_el = document.createElement("div");
        todo_content_el.classList.add("content")

        todo_el.appendChild(todo_content_el);

        const todo_input_el = document.createElement("input");
        todo_input_el.classList.add("text");
        todo_input_el.type = ("text");
        todo_input_el.value = todo;
        todo_input_el.setAttribute("readonly", "readonly");

        todo_content_el.appendChild(todo_input_el);

        const todo_actions_el = document.createElement("div")
        todo_actions_el.classList.add("actions");

        const todo_edit_el = document.createElement("button")
        todo_edit_el.classList.add("edit")
        todo_edit_el.innerHTML = "Edit";

        const todo_delete_el = document.createElement("button")
        todo_delete_el.classList.add("delete")
        todo_delete_el.innerHTML = "Delete";

        todo_actions_el.appendChild(todo_edit_el);
        todo_actions_el.appendChild(todo_delete_el);

        todo_el.appendChild(todo_actions_el)

        list_el.appendChild(todo_el)    

        input.value = "";

        todo_edit_el.addEventListener("click", () =>{
            if(todo_edit_el.innerHTML.toLowerCase()== "edit"){
                todo_input_el.removeAttribute("readonly");
                todo_input_el.focus();
                todo_edit_el.innerHTML = "Save";
            }else{
                todo_input_el.setAttribute("readonly","readonly");
                todo_edit_el.innerHTML = "Edit";
            }
        });

        todo_delete_el.addEventListener('click', () =>{
            list_el.removeChild(todo_el)
        });

        function newTodo() {

            function deleteTaskFromList(index) {
              lists = lists.filter((word, i) => i != index);
              newTodo();
            }

            const output = document.querySelector("todos");
            output.innerHTML = "";
            for (let index in lists) {
              let list = list[index];
              output.innerHTML += `<div id='delete' onclick='deleteTaskFromList(${index})' class='delete'> ${list}</div>`;
            }
          }


    })
})


// let lists = [];

// const form = document.querySelector("form");
// form.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   const input = document.querySelector("todo-input").value;
//   lists.push(input);
//   newTodo();
//   document.querySelector("todo-input").value = "";
// }

// function newTodo() {
//   const output = document.querySelector("todos");
//   output.innerHTML = "";
//   for (let index in lists) {
//     let list = lists[index];
//     output.innerHTML += `<div id='delete' onclick='deleteTaskFromList(${index})' class='delete'> ${list}</div>`;
//   }
// }

// function deleteTaskFromList(index) {
//   lists = lists.filter((word, i) => i != index);
//   newTodo();
// }