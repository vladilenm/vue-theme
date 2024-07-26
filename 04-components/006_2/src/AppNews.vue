<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
    </app-button>
    <app-button
      color="danger"
      v-if="wasRead"
      @action="$emit('unmark', id)"
    >Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolores ipsam minus quod tenetur voluptatum.</p>
      <app-button
        v-if="!wasRead"
        color="primary"
        @action="mark"
      >Прочесть новость</app-button>

      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton'
import AppNewsList from './AppNewsList'
export default {
  // props: ['title'],
  // emits: ['open-news'],
  props: {
    wasRead: Boolean,
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    }
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unmark: null
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // unmark() {
    //   this.$emit('unmark', this.id)
    // }
  },
  components: {AppButton, AppNewsList}
}
</script>