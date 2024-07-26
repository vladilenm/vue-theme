import {ref, Ref} from 'vue'

type ApiRequest = () => Promise<void>

interface FetchApi<T> {
  request: ApiRequest
  response: Ref<T | undefined>
}

export function useFetch<T>(url: RequestInfo, options?: RequestInit): FetchApi<T> {
  const response = ref<T>()

  const request: ApiRequest = async () => {
    const res = await fetch(url, options)
    response.value = await res.json()
  }

  return {response, request}
}