<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>

    <div class="form-control">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password">
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <router-link to="/forget" v-slot="{ navigate }">
      <button class="btn warning" @click="navigate">Забыл пароль?</button>
    </router-link>
    <router-link to="/forget">Забыл пароль?</router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid() {
      return this.email !== '' && this.password !== ''
    }
  },
  inject: ['login'],
  methods: {
    submit() {
      if (this.isValid) {
        this.login()
      }
    }
  }
}
</script>

<style scoped>

</style>