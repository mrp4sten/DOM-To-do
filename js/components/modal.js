import Alert from './alert.js';

export default class Modal {
  constructor() {
    this.title = document.getElementById('modal-title');
    this.description = document.getElementById('modal-description');
    this.btn = document.getElementById('modal-btn');
    this.completed = document.getElementById('modal-completed');
    this.alert = new Alert('modal-alert');
    this.todo = null;
  }

  onClick(callback) {
    this.btn.addEventListener('click', () => {
      if (this.title.value === '' || this.description.value === '') {
        this.alert.show('Title & Description couldnt be empty');
      } else {
        $('#modal').modal('toggle');
        callback(this.todo.id, {
          title: this.title.value,
          description: this.description.value,
          completed: this.completed.checked,
        });
      }
    });
  }

  setValues(todo) {
    this.todo = todo;
    this.title.value = todo.title;
    this.description.value = todo.description;
    this.completed.checked = todo.completed;
  }
}
