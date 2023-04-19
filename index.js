let input = document.querySelector('.input');
let addBtn = document.querySelector('.btn');
let todos = document.querySelector('.tasks');
let form = document.getElementById('form')


input.addEventListener('keyup', ()=>{
    if(input.value.trim() !== 0){
        addBtn.classList.add('active')
    }else {
        addBtn.classList.remove('active')
    }
})

let lists = [];

form.addEventListener("submit", onSubmit);
addBtn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  addBtn = lists.push(input.value)
  if(input.value.length){
    newList();
    form.reset();
  }
}

function deleteTodo(index) {
    lists = lists.filter((word, i) => i != index);
    newList();
 }

function newList() {
    let newList = document.querySelector('item')
    newList.innerHTML=""
    for (let index in todos){
        let todo = todos[index]
    if (input.value.trim() !== 0){
        newList.innerHTML += `
        <div class="tasks">
            <div class="item">
                <p>${todo}</p>
                <div class="item-btn">
                    <button onclick="deleteTodo(${index})">Delete</button>
                </div>
            </div>
        </div>`}
}}