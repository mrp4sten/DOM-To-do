export default class AddTodo {
  constructor() {
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
    this.addBtn = document.getElementById('add');
  }

  onClick(callback) {
    this.addBtn.addEventListener('click', () => {
      if (this.title.value === '' || this.description.value === '') {
        // alert.classList.remove('d-none');
        // alert.innerText = 'Title & Description couldnt be empty';
        // return;
        console.error('ERROR');
      } else {
        callback(this.title.value, this.description.value);
      }
    });
  }
}
