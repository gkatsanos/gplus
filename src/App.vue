<template>
  <div id="app">
    <transition name="menu" appear>
      <navigation></navigation>
    </transition>
    <div class="full-height flex main-content" role="main">
      <transition name="fade" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style src="./sass/main.scss" lang="scss"></style>

<script>
import navigation from '@/components/Navigation/Navigation.vue';

export default {
  components: {
    navigation,
  },
  name: 'app',
};
</script>
