<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="setStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{id}}</strong> нет.
  </h3>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  props: ['id'],
  setup(props) {
    const store = useStore()

    const id = props.id
    const task = computed(() => store.getters.taskById(id))

    const setStatus = status => {
      const updated = {...task.value, status}
      store.dispatch('changeTask', updated)
    }

    return {
      task,
      id,
      setStatus
    }
  }
}
</script>

<style scoped>

</style>