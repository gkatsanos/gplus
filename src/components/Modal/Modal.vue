<style src="./modal.scss" lang="scss" scoped></style>

<template>
  <div v-bind:class="{ 'md-show' : visible }" class="md-modal md-effect-11" id="modal-1">
    <div class="md-content">
      <h3>{{ project.name }}</h3>
      <div>
        <p>This is a modal window. You can do the following things with it:</p>
        {{ project.description }}
        <button class="md-close">Close me!</button>
      </div>
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
