<template>
  <header class="navbar">
    <strong>Счетчик {{ counter }}</strong>

    <button class="btn" @click="add">Добавить 5</button>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    counter() {
      return this.$store.getters['count/counter']
    },
    // ...mapGetters('count', ['counter'])
  },
  methods: {
    ...mapMutations({
      addFive: 'count/add'
    }),
    add() {
      this.addFive({ value: 5 })
      // this.add({value: 5})
      // this.$store.commit('add', {
      //   value: 5
      // })
      // this.$store.commit({
      //   type: 'add',
      //   value: 5
      // })
    }
  }
}
</script>
