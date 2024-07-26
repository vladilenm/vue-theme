<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <login></login>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import Login from './views/Login'

export default {
  components: {TheNavbar, Login},
  provide() {
    return {
      emails: [
        {id: 1, theme: 'Купил себе PlayStation 5'},
        {id: 2, theme: 'Выучил Vue Router'},
        {id: 3, theme: 'Хочу изучить весь Vue'},
        {id: 4, theme: 'А следующий блок про Vuex!'},
        {id: 5, theme: 'А что там на счет Vue Hooks?'}
      ]
    }
  }
}
</script>

<style>
</style>
