<template>
  <div itemscope itemtype="http://schema.org/Organization">{{ position.year }}
    <h3 class="top"><span class="jobtitle" itemprop="name">Senior Front-end developer</span> | <span class="companyName" itemprop="name"><a href="https://www.rocket-internet.com/">Rocket Internet</a></span></h3>
    <p class="time"><time datetime="2015-01-01">January 2015</time> - Present</p>
    <ul class="tasks" itemprop="description">
      <li>Gulp, SASS, Bootstrap, PHP, jQuery</li>
      <li>Front-end of Bonativo.de, Foodora Corporate, Zinsgold.de</li>
      <li>SASS Architect, setup Asset build workflow using Gulp</li>
      <li>Led small team of Front-end Developers</li>
      <li>Developed redesign of Rocket-Internet.de corporate website</li>
    </ul>
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
