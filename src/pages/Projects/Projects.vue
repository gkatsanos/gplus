<template>
  <div class="flex projects">
    <project v-bind:project="project" v-for="project in projects"></project>
  </div>
</template>

<script>
  import project from '../../components/Project/Project'
  import projects from '../../store/projects.js'

  export default {
    components: {
      project
    },
    name: 'projects',
    data () {
      return {
        projects
      }
    }
  }
</script>

<style scoped>
  .projects {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1090px;
    margin: 30px auto;
  }
</style>
