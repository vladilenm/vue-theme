<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button
        ref="myBtn"
        :color="oneColor"
        @action="active = 'one'"
      >One</app-button>

      <app-button
        :color="twoColor"
        @action="active = 'two'"
      >Two</app-button>
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from './AppButton'
import AppTextOne from './AppTextOne'
import AppTextTwo from './AppTextTwo'

export default {
  data() {
    return {
      active: 'one' // two
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.componentName = 'new comp name'
    // }, 1500)

    this.$refs.myBtn.btnLog()
  },
  computed: {
    // componentName() {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get() {
        return 'app-text-' + this.active
      },
      set(value) {
        console.log('componentName', value)
      }
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {AppButton, AppTextOne, AppTextTwo}
}
</script>

<style scoped>

</style>
