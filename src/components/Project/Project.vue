<style src="./project.scss" lang="scss" scoped></style>

<template>
  <div
    @click="toggleModal"
    :class="`project ${ project.name } ${ project.contrast }`"
  >
    <img :src="require(`@/assets/logos/${ project.img }`)" :alt="project.name">
    <modal v-bind:visible="modalVisible" :project="project"></modal>
    <div class="md-overlay"></div>
  </div>
</template>

<script>
import modal from '@/components/Modal/Modal.vue';

export default {
  components: {
    modal,
  },
  name: 'project',
  props: ['project'],
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
  },
};
</script>
