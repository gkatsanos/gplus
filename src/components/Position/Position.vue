<template>
  <div class="position margin-bottom-m" itemscope itemtype="http://schema.org/Organization">
    <div class="position__time col-small font-lg">
      {{ position.timePeriod }}
    </div>
    <div class="position__company-name col-large font-lg companyName" itemprop="name">
      {{ position.companyName }}
    </div>
    <div itemprop="position__description">
      {{ position.jobDescription }}
    </div>
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
