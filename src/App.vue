<style src="./sass/main.scss" lang="scss"></style>

<template>
  <section id="app" class="flex">
    <div class="full-height flex main-content" role="main">
      <transition name="fade" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <transition name="menu" appear>
      <navigation></navigation>
    </transition>
  </section>
</template>

<script>
  import navigation from './components/Navigation/Navigation'

  export default {
    components: {
      navigation
    },
    name: 'app'
  }
</script>
