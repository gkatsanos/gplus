<style src="./navigation.scss" lang="scss" scoped></style>

<template>
  <nav
    class="container flex"
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
      <router-link to="/work" itemprop="item">
        <div class="text" itemprop="name">work</div>
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
