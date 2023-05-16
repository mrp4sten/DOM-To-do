export default class Model {
  constructor() {
    this.view = null;
    this.todos = [];
    this.currentId = 1;
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description) {
    const todo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
    };

    this.todos.push(todo);
    return { ...todo };
  }
}
