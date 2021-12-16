const App = {
  data() {
    return {
      description: ['Первый шаг', 'Второй шаг', 'Третий шаг', 'Четвертый шаг', 'Последний шаг'],
      buttons: ['Основы', 'Компоненты', 'Роутер', 'Vuex', 'Composition'],
      isFirstItem: true,
      forwardBtn: 'ВПЕРЕД',
      currentItem: 0,
      isCompleted: false,
      finishButton: 'ЗАКОНЧИТЬ'
    }
  },
  methods: {
    getInfo(idx) {
      this.isCompleted = false
      this.finishButton = 'ЗАКОНЧИТЬ'
      this.currentItem = idx
      idx == 0 ? this.isFirstItem = true : this.isFirstItem = false
    },
    getNextItem() {

      if (this.currentItem < 4) {
        this.currentItem++
        this.getInfo(this.currentItem)
      } else {
        // this.forwardBtn = 'ЗАКОНЧИТЬ'
      }
    },
    getPreviousItem() {
      this.currentItem--
      this.getInfo(this.currentItem)
    },
    hideBackButton() {
      if (!this.isCompleted) {
        this.isCompleted = true
        this.finishButton = 'НАЧАТЬ СНАЧАЛА'
      } else {
        this.isCompleted = false,
        this.getInfo(0)
      }
    }
  },
  computed: {
    getStepDescription() {
      return this.description[this.currentItem]
    }
  }
}

Vue.createApp(App).mount('#app')