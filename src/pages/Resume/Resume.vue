<style src="./resume.scss" lang="scss" scoped></style>

<template>
  <div class="resume flex">
    <div class="work-experience">
      <h2>Work Experience</h2>
      <position v-bind:position="position" v-for="position in positions"></position>
    </div>
    <div class="right-column">
      <div class="contact-info" itemscope itemtype="http://schema.org/Person">
        <img  itemprop="image"
              src="/static/me_professional@1x.png"
              srcset="/static/me_professional@1x.png 1x,
                      /static/me_professional@2x.png 1.5x,
                      /static/me_professional@2x.png 2x"
              alt="Georgios Katsanos photo"
        />
        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" class="font-small">
          <span itemprop="addressRegion">Berlin,</span>
          <span itemprop="addressCountry">Germany</span>
          <span class="highlight h4 bold">//</span>
          <span itemprop="telephone">+49 (0) 17681479434</span>
          <span class="highlight h4 bold">//</span>
          <a href="mailto:george@gplus.gr" itemprop="email">
    george@gplus.gr</a>
        </div>
      </div>
      <div class="education">
        <h2>Education</h2>
        <education v-bind:education="education" v-for="education in educations"></education>
        <h2 class="h3">Certifications</h2>
        <education v-bind:education="education" v-for="education in certifications"></education>
      </div>
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
