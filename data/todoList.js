const todoList = {
  todos: [],
  addTodo: function(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
      const inputText = event.target.value;
      this.todos.push({
        todoText: inputText,
        completed: false
      });
      event.target.value = "";
      this.displayTodos();
      log.push({
        handler: 'addTodo',
        todoList: JSON.parse(JSON.stringify(this))
      });
    }
  },
  displayTodos: function() {
    const parent = document.getElementById("todoDiv");
    const head = parent.children[0];
    parent.innerHTML = "";
    parent.appendChild(head);
    this.todos.forEach(element => {
        const listTodo = document.createElement("div");
        listTodo.className = "todolist";
        const checkTodo = document.createElement("i");
        if (element.completed) {
            checkTodo.className = "fa fa-check-circle";
        } else {
            checkTodo.className = "fa fa-check-circle gray";
        }
        listTodo.appendChild(checkTodo);
        const inputTodo = document.createElement("input");
        inputTodo.type = "text";
        inputTodo.value = element.todoText;
        //inputTodo.setAttribute("onkeyup", "todoList.addTodo(event)");
        listTodo.appendChild(inputTodo);
        parent.appendChild(listTodo);
      });
  },
};
