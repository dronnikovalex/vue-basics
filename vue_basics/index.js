const App = {
  data() {
    return {
      title: 'Список заметок',
      myPlaceholder: 'Введите текст',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
      console.log(event.target.value)
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUppercase(item) {
      return item.toUpperCase()
    },
    deleteNote(idx) {
      console.log(idx)
      this.notes = this.notes.filter((_, i) => i !== idx)
    }
  }
}

Vue.createApp(App).mount('#app')


