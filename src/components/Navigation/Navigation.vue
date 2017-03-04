<style src="./navigation.scss" lang="scss" scoped></style>

<template>
  <ul itemscope itemtype="http://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <router-link to="/" exact itemprop="item">
        <span itemprop="name">intro</span>
      </router-link>
    </li>
    <li itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <router-link to="/resume" itemprop="item">
        <span itemprop="name">résumé</span>
      </router-link>
    </li>
    <li itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <router-link to="/projects" itemprop="item">
        <span itemprop="name">projects</span>
      </router-link>
    </li>
    <li itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <a href="https://medium.com/@gplusgr" target="_blank">
        <span itemprop="name">writings</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
      }
    }
  }
</script>
