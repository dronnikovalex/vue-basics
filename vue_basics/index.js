const App = { 
  data() {
    return {
      title: 'Список заметок',
      myPlaceholder: 'Введите текст',
      inputValue: 'aaa',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      this.notes.push(this.inputValue)
    }
  }
}

Vue.createApp(App).mount('#app')


