<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><a href="/dashboard">Главная</a></li>
      <li>
        <a custom to="/mail">Почта</a>
      </li>
      <li><a href="#">Выйти</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
