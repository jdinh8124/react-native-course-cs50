const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

classNames.TODO_TEXT = document.getElementById

// let input = document.createElement("input");
// input.type = "text";
// // input.className = "css-class-name"; // set the CSS class
// let buttonOne = document.getElementsByClassName("container center")
// console.log(buttonOne)
// buttonOne.appendChild(input);

function newTodo() {
  let num =  parseInt(itemCountSpan.innerText);
  num++;
  itemCountSpan.innerText = num;
  let input = document.getElementById('input');
  let text = input.value;
  input.value = "";

}
