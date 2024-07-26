<template>
  <div class="card">
    <h1>Пользователи</h1>
    <div v-if="error">{{error}}</div>
    <Suspense v-else>
      <template #default>
        <UserList />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import {defineComponent, onErrorCaptured, ref} from 'vue'
import UserList from '@/components/UserList.vue'

export default defineComponent({
  setup() {
    const error = ref<any>(null)
    onErrorCaptured(e => {
      error.value = e
      return true
    })
    return {error}
  },
  components: {UserList}
})
</script>