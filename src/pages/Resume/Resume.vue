<style src="./resume.scss" lang="scss" scoped></style>

<template>
  <div class="resume flex">
    <div class="work-experience">
      <h2>Work Experience</h2>
      <position v-bind:position="position" v-for="position in positions"></position>
    </div>
    <div class="education">
      <h2>Education</h2>
      <education v-bind:education="education" v-for="education in educations"></education>
      <h2 class="h3">Certifications</h2>
      <education v-bind:education="education" v-for="education in certifications"></education>
    </div>
  </div>
</template>

<script>
  import position from '../../components/Position/Position'
  import education from '../../components/Education/Education'
  import positions from '../../store/positions.js'
  import educations from '../../store/educations.js'
  import certifications from '../../store/certifications.js'

  export default {
    components: {
      position,
      education
    },
    name: 'resume',
    data () {
      return {
        positions, educations, certifications
      }
    }
  }
</script>
