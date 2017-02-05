<style src="./sass/main.scss" lang="scss"></style>

<template>
  <section>
    <div class="container">
    <transition name="fade" appear mode="out-in">
      <router-view></router-view>
    </transition>
    </div>
    <footer>
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
