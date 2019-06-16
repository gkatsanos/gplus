<style src="./resume.scss" lang="scss" scoped></style>

<template>
  <div class="resume full-height flex-desktop">
    <div class="work-experience">
      <h2>Work Experience</h2>
      <position
        :position="position"
        v-for="position in positions"
        :key="position.id" />
    </div>
    <div class="right-column">
      <div class="contact-info" itemscope itemtype="http://schema.org/Person">
        <img  itemprop="image"
              src="../../assets/me_professional@1x.png"
              srcset="../../assets/me_professional@1x.png 1x,
                      ../../assets/me_professional@2x.png 1.5x,
                      ../../assets/me_professional@2x.png 2x"
              alt="Georgios Katsanos photo"
        />
        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" class="address flex font-small">
          <span>
            <span itemprop="addressRegion">Berlin</span>,
            <span itemprop="addressCountry">Germany</span>
          </span>
          <span class="highlight bold">//</span>
          <span itemprop="telephone">+49 (0) 17681479434</span>
          <span class="highlight bold">//</span>
          <a href="mailto:george@gplus.gr" itemprop="email">
    george@gplus.gr</a>
        </div>
      </div>
      <div class="education">
        <h2>Education</h2>
        <education
          :education="education"
          v-for="education in educations"
          :key="education.id"/>
        <div class="certifications">
          <h2>Certifications</h2>
          <education
            :education="education"
            v-for="education in certifications"
          :key="education.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import position from '@/components/Position/Position.vue';
import education from '@/components/Education/Education.vue';
import positions from '@/store/positions';
import educations from '@/store/educations';
import certifications from '@/store/certifications';

export default {
  components: {
    position,
    education,
  },
  name: 'resume',
  data() {
    return {
      positions,
      educations,
      certifications,
    };
  },
};
</script>
