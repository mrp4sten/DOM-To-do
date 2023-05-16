export default class View {
  constructor() {
    this.model = null;
    this.table = table = document.getElementById('table');
    this.addBtn = document.getElementById('add');
    this.addBtn.addEventListener('click', () =>
      this.addTodo('test title', 'test description')
    );
  }

  setModel(model) {
    this.model = model;
  }

  addTodo(title, description) {
    this.model.addTodo(title, description);
  }
}
