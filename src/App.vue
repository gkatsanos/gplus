<style src="./sass/main.scss" lang="scss"></style>

<template>
  <section>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer>
      <div class="container">
        <ul class="social list-flex">
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
            <router-link to="/cv">CV</router-link>
          </li>
        </ul>
      </div>
    </section>
  </footer>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>
