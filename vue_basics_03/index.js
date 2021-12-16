const h = Vue.h

const app = Vue.createApp({
  data: () => ({
    title: 'from template'
  }),
  methods: {
    changeTitle() {
      this.title = 'Изменили'
    }
  },
  // template: `
  //   <div class="card center">
  //     <h1>{{ title }}</h1>
  //     <button class="btn" @click="title='new title'">Изменить</button>
  //   </div>
  // `
  render() {
    return h('div', {
      class: 'card center'
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onClick: this.changeTitle
      }, 'Изменить')
  ])
  }
})

app.mount('#app')