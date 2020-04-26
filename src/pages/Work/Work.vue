<style src="./work.scss" lang="scss" scoped></style>

<template>
  <div class="flex work">
    <project :project="project" v-for="project in projects" :key="project.id"></project>
  </div>
</template>

<script>
import project from '@/components/Project/Project.vue';
import projects from '@/store/projects';

export default {
  components: {
    project,
  },
  name: 'work',
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped>
  .work {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1090px;
    margin: 30px auto;
  }
</style>
