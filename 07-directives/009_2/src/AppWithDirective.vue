<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].blink.hover="myColor">Разговор про директивы</h2>

      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus type="text" id="inp">
      </div>

      <button class="btn" @click="myColor = 'darkblue'">Сделать синим!</button>
      <button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color'">Переключить тип</button>
    </div>
  </div>
</template>

<script>
  import focusDirective from './focusDirective'
  import colorDirective from './colorDirective'

  export default {
    data() {
      return {
        myColor: 'darkred',
        type: 'color',
        show: true
      }
    },
    // mounted() {
    //   setTimeout(() => {
    //     this.show = false
    //   }, 2000)
    // },
    directives: {
      focus: focusDirective,
      color: colorDirective
    }
  }
</script>

