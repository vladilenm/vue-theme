<template>
  <h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasksCount }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date(task.date).toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="open(task.id)">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import AppStatus from '../components/AppStatus'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const router = useRouter()

    const tasks = computed(() => store.getters.tasks)
    const activeTasksCount = computed(() => store.getters.activeTasksCount)

    return {
      tasks, activeTasksCount,
      open: id => router.push(`/task/${id}`)
    }
  },
  components: {AppStatus}
}
</script>
