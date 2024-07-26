<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
    <button class="btn" @click="$router.push('/login')">Обратно к логину 2</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>