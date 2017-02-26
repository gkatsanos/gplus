<template>
  <div class="position" itemscope itemtype="http://schema.org/Organization">
    <h3>
      <span class="highlight">//</span>
      {{ position.timePeriod }}
      <span class="company-name" itemprop="name">
        {{ position.companyName }}
      </span>
    </h3>
    <p itemprop="description">
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
