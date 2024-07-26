<template>
  <div class="card card-w70">
    <template v-if="blocks.length">
      <component
        v-for="block in blocks"
        :key="block.id"
        :is="'resume-' + block.type"
        v-bind="{value: block.value}"
      ></component>
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import ResumeAvatar from './parts/ResumeAvatar'
import ResumeSubtitle from './parts/ResumeSubtitle'
import ResumeText from './parts/ResumeText'
import ResumeTitle from './parts/ResumeTitle'

export default {
  props: ['blocks'],
  components: {
    ResumeTitle,
    ResumeText,
    ResumeSubtitle,
    ResumeAvatar
  }
}
</script>