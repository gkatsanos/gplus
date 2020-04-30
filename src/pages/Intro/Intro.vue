<style src="./intro.scss" lang="scss"></style>

<template>
  <div class="intro full-height flex flex-distribute">
    <div class="title-subtitle">
      <h2 class="subtitle">
        <template v-for="(character, index) in headlineSplit">
          <br v-if="character === '*'" :key="index" class="newline" />
          <span v-else-if="character === ' '" :key="index" class="space">
            {{ character }}
          </span>
          <span v-else :key="index" class="character">
            {{ character }}
          </span>
        </template>
      </h2>
    </div>
    <div class="skills">
      SCSS & JS architecture
      <span class="highlight">//</span>
      Vue, React, Node, Express
      <span class="highlight">//</span>
      webpack & scaffolding
      <br />
      performance optimization
      <span class="highlight">//</span>
      training & mentoring
    </div>
    <div class="social-links flex" role="navigation">
      <a rel="nofollow" href="https://github.com/gkatsanos/" target="_blank">
        <i class="icon-github"></i>
        github
      </a>
      <a
        rel="nofollow"
        href="http://stackoverflow.com/users/458060/george-katsanos"
        target="_blank"
      >
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
  name: "Intro",
  data() {
    return {
      headline: "HUMAN-CENTERED*DESIGN & TECHNOLOGY",
    };
  },
  computed: {
    headlineSplit() {
      return this.headline.split("");
    },
  },
};
</script>
