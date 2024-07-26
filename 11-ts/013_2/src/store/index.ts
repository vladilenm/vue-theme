import { createStore, useStore as baseUseStore, Store } from 'vuex'

export default createStore<{title: string}>({
  state: {
    title: 'App Title'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    test() {
      return 'Ti'
    }
  },
  modules: {
  }
})

