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
  },
  computed: {
    doubleCount() {
      console.log('called')
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      console.log('Input value change', value)
    }
  }
}

Vue.createApp(App).mount('#app')


