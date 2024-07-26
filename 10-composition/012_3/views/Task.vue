<template>
  <div class="card">
    <h2>Название задачи</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: Описание задачи</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus}
}
</script>

<style scoped>

</style>