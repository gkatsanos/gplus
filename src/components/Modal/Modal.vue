<style src="./modal.scss" lang="scss" scoped></style>

<template>
  <div v-bind:class="{ 'md-show' : visible }" class="md-modal md-effect-1" id="modal-1">
    <div class="md-content">
      {{ project.description }}
      <a v-bind:url="project.url">Take me there</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: ['project', 'visible'],
    data () {
      return {
      }
    }
  }
</script>
