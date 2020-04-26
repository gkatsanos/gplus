<template>
  <div id="app">
    <navigation></navigation>
    <div class="full-height flex main-content" role="main">
      <transition name="fade" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style src="./sass/main.scss" lang="scss"></style>

<script>
import navigation from "@/components/Navigation/Navigation.vue";

export default {
  name: "App",
  components: {
    navigation,
  },
};
</script>
