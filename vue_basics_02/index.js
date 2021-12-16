Vue.createApp({
  data: () => ({
    myHtml: '<h1>Заголовок h1</h1>',
    title: 'Тестовый тайтл',
    person: {
      firstName: 'Alex',
      lastName: 'Dronnikov',
      age: 28
    },
    items: [1, 2, 3, 4, 5, 6]
  }),
  computed: {
    evenItems() {
      return this.items.filter(item => item % 2 === 0)
    }
  },
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
    },
    removeItem(i) {
      this.items.splice(i, 1)
    },
    logItem(i) {
      console.log(i)
    }
  }
}).mount('#app')