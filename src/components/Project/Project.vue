<style src="./project.scss" lang="scss" scoped></style>

<template>
  <div v-on:click="modalVisible = !modalVisible" v-bind:class="`project ${ project.name } ${ project.contrast }`">
    <img v-bind:src="`/static/logos/${ project.img }`" alt="">
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
    data () {
      return {
        modalVisible: false
      }
    },
    props: ['project'],
    methods: {
      expandModal: function () {
        console.log('cliked!')
        this.modalVisible = !this.modalVisible
      }
    }
  }
</script>
