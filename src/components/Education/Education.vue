<template>
  <div class="position margin-bottom-m" itemscope itemtype="http://schema.org/Organization">
    <h4 class="position__time col-small">
      <span class="highlight">//</span>
      {{ education.timePeriod }}
      <span class="position__company-name col-large companyName" itemprop="name">
        {{ education.companyName }}
      </span>
    </h4>
    <div itemprop="position__description">
      {{ education.jobDescription }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'education',
    props: ['education'],
    data () {
      return {
      }
    }
  }
</script>
