<style src="./navigation.scss" lang="scss" scoped></style>

<template>
  <div>
    <ul>
      <li>
        <router-link to="/" exact>intro</router-link>
      </li>
      <li>
        <router-link to="/resume">résumé</router-link>
      </li>
      <li>
        <router-link to="/projects">projects</router-link>
      </li>
      <li>
        <router-link to="/projects">writings</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
      }
    }
  }
</script>
