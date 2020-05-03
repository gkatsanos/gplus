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
      Vue, React, Node, Express
      <span class="highlight">//</span>
      Mobile & Responsive Web
      <span class="highlight">//</span>
      SCSS & JS architecture
      <br />
      performance optimization
      <span class="highlight">//</span>
      training & mentoring
    </div>
    <social />
  </div>
</template>

<script>
import Social from "@/components/Social/Social";

export default {
  name: "Intro",
  components: { Social },
  data() {
    return {
      headline: "HUMAN-CENTERED*WEB DEVELOPMENT",
    };
  },
  computed: {
    headlineSplit() {
      return this.headline.split("");
    },
  },
};
</script>
