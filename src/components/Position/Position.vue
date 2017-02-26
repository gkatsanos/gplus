<template>
  <div class="position margin-bottom-m" itemscope itemtype="http://schema.org/Organization">
    <h3 class="position__time">
      <span class="highlight">//</span>
      {{ position.timePeriod }}
      <span class="position__company-name companyName" itemprop="name">
        {{ position.companyName }}
      </span>
    </h3>
    <p itemprop="position__description">
      {{ position.jobDescription }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'position',
    props: ['position'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
