<template>
  <div class="position margin-bottom-m"  itemscope itemtype="http://schema.org/EducationalOrganization">
    <h4 class="position__time col-small">
      <span class="highlight">//</span>
      <span class="date">
        <time>{{ education.timePeriod }}</time>
      </span>
      <span class="position__company-name col-large companyName" itemprop="name">
        {{ education.institution }}
      </span>
    </h4>
    <p itemprop="description">
      {{ education.description }}
    </p>
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
