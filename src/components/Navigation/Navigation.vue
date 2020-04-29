<style src="./navigation.scss" lang="scss"></style>

<template>
  <nav
    class="container container--navigation flex"
    role="navigation"
    itemscope
    itemtype="http://schema.org/BreadcrumbList"
  >
    <div
      class="menu-item"
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
    >
      <router-link to="/" exact itemprop="item">
        <div class="text" itemprop="name">intro</div>
      </router-link>
    </div>
    <div
      class="menu-item"
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
    >
      <router-link to="/selected-work" itemprop="item">
        <div class="text" itemprop="name">selected work</div>
      </router-link>
    </div>
    <div
      class="menu-item"
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
    >
      <router-link to="/resume" itemprop="item">
        <div class="text" itemprop="name">curriculum vitae</div>
      </router-link>
    </div>
    <div
      class="menu-item"
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
    >
      <router-link to="/contact" itemprop="item">
        <div class="text" itemprop="name">say hello!</div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
};
</script>
