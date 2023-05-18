import Alert from './alert.js';

export default class AddTodo {
  constructor() {
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
    this.addBtn = document.getElementById('add');
    this.alert = new Alert('alert');
  }

  onClick(callback) {
    this.addBtn.addEventListener('click', () => {
      if (this.title.value === '' || this.description.value === '') {
        this.alert.show('Title & Description couldnt be empty');
        console.error('ERROR');
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value);
      }
    });
  }
}
