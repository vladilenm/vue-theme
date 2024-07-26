<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }}</strong></p>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'VueJS',
      version: 3
    }
  },
  methods: {
    changeInfo() {
      this.name = 'Vue JS!'
      this.version = 4
    }
  }
}
</script>