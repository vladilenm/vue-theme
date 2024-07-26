<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголовок модалки</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi excepturi inventore perferendis quaerat quam repudiandae unde veritatis vero voluptates?</p>
  </div>
</template>

<script>
  export default {
    emits: ['close']
  }
</script>

<style scoped>

</style>