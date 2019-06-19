<style src="./modal.scss" lang="scss" scoped></style>

<template>
  <div v-bind:class="{ 'md-show' : visible }" class="md-modal md-effect-1" id="modal-1">
    <div class="md-content">
      {{ project.description }}
      <div v-if="project.url" class="buttons-wrapper">
        <a target="_blank" class="btn" v-bind:href="project.url">go to project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['project', 'visible'],
  data() {
    return {
    };
  },
};
</script>
