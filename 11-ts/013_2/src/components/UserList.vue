<template>
  <ul class="list">
    <li class="list-item" v-for="u in users" :key="u.id">
      {{u.name}}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useUsers} from '@/users'

export default defineComponent({
  async setup() {
    const {users} = await useUsers()
    return {users}
  }
})
</script>