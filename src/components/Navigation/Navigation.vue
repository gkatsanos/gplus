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
        <a href="https://medium.com/@gplusgr" target="_blank">writings</a>
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
