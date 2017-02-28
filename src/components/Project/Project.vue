<style src="./project.scss" lang="scss" scoped></style>

<template>
  <div v-bind:class="`project ${ project.name } ${ project.contrast }`">
    <img v-bind:src="`/static/logos/${ project.img }`" alt="">
  </div>
</template>

<script>
  export default {
    name: 'project',
    props: ['project'],
    data () {
      return {
      }
    }
  }
</script>
