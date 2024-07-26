<template>
  <div class="card" v-if="comments.length">
    <h2>Комментарии</h2>
    <ul class="list">
      <li
        class="list-item"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div>
          <p><strong>{{comment.email}}</strong></p>
          <small>{{comment.body}}</small>
        </div>
      </li>
    </ul>
  </div>
  <p v-else>
    <button class="btn primary" @click="$emit('load-comments')">Загрузить комментарии!</button>
  </p>
</template>

<script>
export default {
  emits: ['load-comments'],
  props: ['comments']
}
</script>

<style scoped>

</style>