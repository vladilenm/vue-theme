<template>
  <div class="alert" v-if="alert" :class="alert.type">
    <h3>{{ alert.title }}</h3>
    <p>{{ alert.text }}</p>
    <button class="btn" :class="alert.type" @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['alert']
}
</script>

<style scoped>

</style>