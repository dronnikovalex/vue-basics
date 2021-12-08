const App = { 
  data() {
    return {
      title: 'Список заметок',
      myPlaceholder: 'Введите текст',
      inputValue: 'aaa'
    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    }
  }
}

Vue.createApp(App).mount('#app')


