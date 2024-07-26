import {useFetch} from '@/fetch'
import {ref, Ref} from 'vue'

interface User {
  name: string
  id: string
}

export type UsableUsers = Promise<{users: Ref<User[] | undefined>}>

export async function useUsers(): UsableUsers {
  const loading = ref(false)
  const {request, response: users} = useFetch<User[]>('11https://jsonplaceholder.typicode.com/users')

  if (!loading.value) {
    await request()
    loading.value = true
  }

  return {users}
}