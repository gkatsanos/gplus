<style src="./modal.scss" lang="scss" scoped></style>

<template>
  <div v-bind:class="{ 'md-show' : visible }" class="md-modal md-effect-1" id="modal-1">
    <div class="md-content">
      <h3>{{ project.name }}</h3>
      {{ project.description }}
      <button class="md-close">Close me!</button>
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
