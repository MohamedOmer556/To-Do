const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('#filter');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', removeCheck);
filter.addEventListener('click', filterTodo);

function addTodo(e){
  //prevent from refrishing
  e.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText =  todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //check btn
 const completed = document.createElement('button');
 completed.innerHTML = '<i class="fas fa-check"></i>';
 completed.classList.add('completed-btn');
 todoDiv.appendChild(completed);
 //remove btn
 const removed = document.createElement('button');
 removed.innerHTML = '<i class="fas fa-trash"></i>';
 removed.classList.add('removed-btn');
 todoDiv.appendChild(removed);
//apend to list
todoList.appendChild(todoDiv);
todoInput.value = '';
}
// remove items
function removeCheck(e){
  const item = e.target;
  if (item.classList[0] === 'removed-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }
  if (item.classList[0] === 'completed-btn'){
   const todo = item.parentElement;
   todo.classList.toggle('completed');
  }
}
function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
  switch(e.target.value){
    case 'all':
      todo.style.display = 'flex';
      break;
      
    case 'completed':
      if (todo.classList.contains('completed')){
        todo.style.display = 'flex';
      }
      else{
        todo.style.display = 'none';
      }
      break;
    case 'uncompleted':
      if (!todo.classList.contains('completed')){
        todo.style.display = 'flex';
      }
      else{
        todo.style.display = 'none';
      }
      break;
  }
});
}