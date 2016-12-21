<template>
  <section>
    <div class="container">
      <div class="wrapper text-center">
        <h1 class="hello">ジョージ・カチャノス</h1>
        <h2 class="subtitle">Berlin-Based Front-end Developer</h2>
      </div>
    </div>
    <footer>
      <div class="social list-flex">
        <li><a href="https://github.com/gkatsanos">GITHUB</a></li>
        <li><a href="https://medium.com/@gplusgr">MEDIUM</a></li>
        <li>
          <a href="http://stackoverflow.com/users/458060/george-katsanos">STACKOVERFLOW</a>
        </li>
        <li><a href="https://www.codeschool.com/users/860136">CODESCHOOL</a></li>
        <li><a href="http://www.codewars.com/users/gkatsanos">CODEWARS</a></li>
        <li>
          <a href="http://de.linkedin.com/in/georgekatsanos">LINKEDIN</a>
        </li>
        <li><a href="https://www.hackerrank.com/gkatsanos">HACKERRANK</a></li>
        <li>
          <router-link to"/cv">CV</router-link>
        </li>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
