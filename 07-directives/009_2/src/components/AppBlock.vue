<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="Это очень важное сообщение, будьте бдительны"
        title="Внимание!"
        @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{alert ? 'Скрыть' : 'Показать'}} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert'
import alertMixin from '../alertMixin'

export default {
  mixins: [alertMixin],
  components: {AppAlert}
}
</script>

