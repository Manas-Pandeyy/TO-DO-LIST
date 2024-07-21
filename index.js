document.addEventListener('DOMContentLoaded', function() {
  var newTodo = document.querySelector('.new-todo');
  var todoList = document.querySelector('.todo-list');

  newTodo.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          var todoText = this.value.trim();
          if (todoText) {
              var todoItem = document.createElement('li');
              todoItem.textContent = todoText;
              todoList.appendChild(todoItem);
              this.value = '';
          }
      }
  });

  // Add functionality to remove items when clicking on them
  todoList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
          e.target.remove();
      }
  });
});