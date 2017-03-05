<style src="./project.scss" lang="scss" scoped></style>

<template>
  <div v-on:click="toggleModal" v-bind:class="`project ${ project.name } ${ project.contrast }`">
    <img  v-bind:src="`/static/logos/${ project.img }`" v-bind:alt="project.name">
    <modal v-bind:visible="modalVisible" v-bind:project="project"></modal>
    <div class="md-overlay"></div>
  </div>
</template>

<script>
  import modal from '../Modal/Modal'

  export default {
    components: {
      modal
    },
    name: 'project',
    props: ['project'],
    data () {
      return {
        modalVisible: false
      }
    },
    methods: {
      toggleModal: function () {
        this.modalVisible = !this.modalVisible
      }
    }
  }
</script>
