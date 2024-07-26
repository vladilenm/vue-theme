<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>


<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const title = ref('')
    const date = ref(null)
    const description = ref('')

    const submit = () => {
      const newTask = {
        id: Date.now().toString(),
        title: title.value,
        date: new Date(date.value).setHours(23,59,59,999),
        description: description.value,
        status: 'active'
      }

      store.dispatch('createTask', newTask)
      router.push('/')
    }

    const isValid = computed(() => {
      return title.value !== '' &&
             date.value && description.value !== ''
    })

    return {
      submit,
      title,
      date,
      description,
      isValid,
    }
  }
}
</script>