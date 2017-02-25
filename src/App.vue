<style src="./sass/main.scss" lang="scss"></style>

<template>
  <section>
    <div class="main-content" role="main">
      <transition name="fade" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <nav class="navigation" role="navigation">
      <div class="container">
        <ul class="social list-flex">
            <navigation></navigation>
        </ul>
      </div>
    </section>
  </footer>
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
