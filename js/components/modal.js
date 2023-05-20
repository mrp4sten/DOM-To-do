export default class Modal {
  constructor() {
    this.title = document.getElementById('modal-title');
    this.description = document.getElementById('modal-description');
    this.btn = document.getElementById('modal-btn');
    this.completed = document.getElementById('modal-completed');
  }

  onClick(callback) {
    this.addBtn.addEventListener('click', () => {
      if (this.title.value === '' || this.description.value === '') {
        this.alert.show('Title & Description couldnt be empty');
      } else {
        $('#modal').modal('toggle');
      }
    });
  }

  setValues(todo) {
    this.title.value = todo.title;
    this.description.value = todo.description;
    this.completed.checked = todo.completed;
  }
}
