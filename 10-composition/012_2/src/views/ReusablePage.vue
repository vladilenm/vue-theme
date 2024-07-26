<template>
  <app-alert
    v-if="alert"
    title="Работаем с Composition"
    type="primary"
    @close="close"
  ></app-alert>

  <div class="card">
    <h1>Переиспользование</h1>

    <button class="btn primary" @click="toggle">{{alert ? 'Закрыть' : 'Показать'}} сообщение</button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import {reactive} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import AppAlert from '../AppAlert'
import {useAlert} from '../use/alert'

export default {
  setup() {
    // const alert = reactive({
    //   type: 'warning',
    //   title: 'Reactive Alert'
    // })
    // const {alert, close, toggle} = useAlert()

    const router = useRouter()
    const route = useRoute()

    const navigate = () => router.push('/')

    return {
      navigate,
      ...useAlert(true)
    }
  },
  components: {AppAlert}
}
</script>

<style scoped>

</style>