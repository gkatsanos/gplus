<style src="./sass/main.scss" lang="scss"></style>

<template>
  <section>
    <div class="main-content flex" role="main">
      <transition name="fade" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <nav class="navigation" role="navigation">
      <navigation></navigation>
    </nav>
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
