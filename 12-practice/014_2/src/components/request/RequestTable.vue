<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(r, idx) in requests" :key="r.id">
      <td>{{ idx + 1 }}</td>
      <td>{{ r.fio }}</td>
      <td>{{ r.phone }}</td>
      <td>{{ currency(r.amount) }}</td>
      <td><AppStatus :type="r.status" /></td>
      <td>
        <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}">
          <button class="btn" @click="navigate">Открыть</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from '../../utils/currency'
import AppStatus from '../ui/AppStatus'

export default {
  props: ['requests'],
  setup() {
    return {currency}
  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>