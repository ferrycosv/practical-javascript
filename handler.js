var handler = {
  addTodo: function(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
      todoList.addTodo(event.target.value);
      event.target.value = "";
      todoList.displayTodos();
      // log the user input
      log.push({
        handler: "addTodo",
        todoList: JSON.parse(JSON.stringify(this))
      });
    }
  },
  changeTodo: function(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
      const position = Number(event.target.getAttribute("data-position"));
      todoList.changeTodo(position, event.target.value);
      todoList.displayTodos();
      // log the user input
      log.push({
        handler: "changeTodo",
        todoList: JSON.parse(JSON.stringify(this))
      });
    }
  },
  saveChanges: function(event) {
    if (confirm("Do you want to save changes?")) {
      const position = Number(event.target.getAttribute("data-position"));
      todoList.changeTodo(position, event.target.value);
    }
    todoList.displayTodos();
    // log the user input
    log.push({
      handler: "changeTodo",
      todoList: JSON.parse(JSON.stringify(this))
    });
  }
};
