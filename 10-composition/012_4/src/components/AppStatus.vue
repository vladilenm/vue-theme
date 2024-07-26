<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import {watch, ref} from 'vue'
export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['active', 'done', 'pending', 'cancelled'].includes(value)
      }
    }
  },
  setup(props) {
    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning'
    }

    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется'
    }

    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])

    watch(props, val => {
      className.value = classesMap[val.type]
      text.value = textMap[val.type]
    })

    return {
      className,
      text
    }
  }
}
</script>

<style scoped>

</style>