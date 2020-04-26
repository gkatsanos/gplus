<style src="./project.scss" lang="scss" scoped></style>

<template>
  <div :class="`project ${project.name} ${project.contrast}`" @click="toggleModal">
    <img :src="require(`@/assets/logos/${project.img}`)" :alt="project.name" />
    <modal :visible="modalVisible" :project="project"></modal>
    <div class="md-overlay"></div>
  </div>
</template>

<script>
import modal from "@/components/Modal/Modal.vue";

export default {
  name: "Project",
  components: {
    modal,
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
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
