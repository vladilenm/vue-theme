<template>
  <div class="question" @click="isOpen = !isOpen">
    <div class="question-title">{{question.title}}</div>
    <div class="question-body" v-if="isOpen">{{question.text}}</div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  props: ['question'],
  setup() {
    return {
      isOpen: ref(false)
    }
  }
}
</script>

<style scoped>

</style>