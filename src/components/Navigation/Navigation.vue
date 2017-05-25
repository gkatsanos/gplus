<style src="./navigation.scss" lang="scss" scoped></style>

<template>
  <nav class="container" role="navigation" itemscope itemtype="http://schema.org/BreadcrumbList">
    <div class="menu-item" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <router-link to="/" exact itemprop="item">
        <div class="text" itemprop="name">intro</div>
      </router-link>
    </div>
    <div class="menu-item" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <router-link to="/resume" itemprop="item">
        <div class="text" itemprop="name">résumé</div>
      </router-link>
    </div>
    <div class="menu-item" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <router-link to="/projects" itemprop="item">
        <div class="text" itemprop="name">projects</div>
      </router-link>
    </div>
    <div class="menu-item" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
      <a href="https://medium.com/@gplusgr" target="_blank" rel="nofollow">
        <div class="text" itemprop="name">writings</div>
      </a>
    </div>
  </nav>
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
