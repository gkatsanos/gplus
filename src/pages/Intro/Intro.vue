<style src="./intro.scss" lang="scss" scoped></style>

<template>
    <div class="intro flex flex-distribute">
      <div class="title-subtitle">
<!--        <h1 class="hello">george<span class="highlight">.</span>katsanos</h1>-->
        <h2 class="subtitle">
          <template v-for="(character, index) in headlineSplit">
            <br v-if="character === '*'" class="newline" :key="index"/>
            <span v-else-if="character === ' '" class="space" :key="index">
              {{ character }}
            </span>
            <span v-else class="character" :key="index">
              {{ character }}
            </span>
          </template>
        </h2>
      </div>
      <div class="skills">
        SCSS & JS architecture
        <span class="highlight">//</span>
        ES6
        <span class="highlight">//</span>
        performance optimization
        <span class="highlight">//</span>
        semantic HTML <span class="highlight">//</span>
        web animations <span class="highlight">//</span>
        training & mentoring
      </div>
      <div class="social-links" role="navigation">
        <a rel="nofollow" href="https://github.com/gkatsanos/" target="_blank">
          <i class="icon-github"></i>
          github
        </a>
        <a rel="nofollow" href="http://stackoverflow.com/users/458060/george-katsanos" target="_blank">
          <i class="icon-stackoverflow"></i>
          stackoverflow
        </a>
        <a rel="nofollow" href="https://www.linkedin.com/in/georgekatsanos" target="_blank">
          <i class="icon-linkedin-square"></i>
          linkedin
        </a>
        <a rel="nofollow" href="https://medium.com/@gplusgr" target="_blank">
          <i class="icon-medium"></i>
          medium
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'intro',
  data() {
    return {
      headline: 'HUMAN-CENTERED*DESIGN & TECHNOLOGY',
    };
  },
  computed: {
    headlineSplit() {
      return this.headline.split('');
    },
  },
};
</script>
