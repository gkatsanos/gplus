<style src="./position.scss" lang="scss" scoped></style>

<template>
  <div class="position" itemscope itemtype="http://schema.org/Organization">
    <h3>
      <span class="highlight">//</span>
      <span class="date">
        <time datetime="">{{ position.timePeriod.from }}</time> -
        <time datetime="">{{ position.timePeriod.to }}</time>
      </span>
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
