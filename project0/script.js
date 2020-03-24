const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

classNames.TODO_TEXT = document.getElementById


function newTodo() {
  let num =  parseInt(itemCountSpan.innerText);
  num++;
  itemCountSpan.innerText = num;
  let input = document.getElementById('input');
  let text = input.value;
  input.value = "";
  let ulElement = document.createElement("ul");
  let check = document.createElement("INPUT");
  check.setAttribute("type", "checkbox");
  check.addEventListener('change', checkedAmount);
  let div = document.createElement("div");
  div.appendChild(ulElement);
  div.appendChild(check);
  div.className = "center todo-checkbox";
  ulElement.innerText = text;
  list.appendChild(div);
}


function checkedAmount(event){
  let num = parseInt(uncheckedCountSpan.innerText);
    if (event.currentTarget.checked) {
      num++;
    }else{
      num--
    }
    uncheckedCountSpan.innerText = num;
  }
