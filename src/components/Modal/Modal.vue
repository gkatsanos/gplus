<style src="./modal.scss" lang="scss" scoped></style>

<template>
  <div id="modal-1" :class="{ 'md-show': visible }" class="md-modal md-effect-1">
    <div class="md-content">
      {{ project.description }}
      <div v-if="project.url" class="buttons-wrapper">
        <a target="_blank" class="btn" :href="project.url">go to project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    project: {
      type: Object,
      default: () => {},
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
