<template>
  <div id="app" :class="$route.name">
    <div class="logo">
      <Logo />
    </div>
    <navigation></navigation>
    <transition name="fade" appear mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style src="./sass/main.scss" lang="scss"></style>

<script>
import navigation from "@/components/Navigation/Navigation.vue";
import Logo from "@/components/Logo/Logo.vue";

export default {
  name: "App",
  components: {
    navigation,
    Logo,
  },
};
</script>
