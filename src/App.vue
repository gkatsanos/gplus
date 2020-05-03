<template>
  <div id="app" :class="$route.name">
    <navigation></navigation>
    <transition name="fade" appear mode="out-in">
      <router-view></router-view>
    </transition>
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
