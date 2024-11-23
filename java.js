let inputs = document.getElementById("todo-input");
let text = document.getElementById("todo-list");

function addTodo() {
  if(inputs.value){
    let newElement = document.createElement("ul");
    newElement.innerHTML= `${inputs.value} <i class="fa fa-trash-o" style="font-size:24px"></i>`
    text.appendChild(newElement);
    inputs.value = "";
    newElement.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElement.remove();
    }
  } else {
    alert('Please Add task');
  }
}
