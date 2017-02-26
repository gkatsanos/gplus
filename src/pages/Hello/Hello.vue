<style src="./hello.scss" lang="scss" scoped></style>

<template>
    <div class="flex flex-distribute">
      <div>
        <h1 class="hello">gplus.gr</h1>
        <h2 class="subtitle">front end development</h2>
      </div>
      <div class="skills">
        SCSS & JS architecture // ES6 // performance optimization // semantic HTML // web animations //<br> training & mentoring
      </div>
      <div class="social-links" role="navigation">
        <a href="https://github.com/gkatsanos/" target="_blank">
          <i class="icon-github"></i>
          github
        </a>
        <a href="stackoverflow.com/users/458060/george-katsanos" target="_blank">
          <i class="icon-stackoverflow"></i>
          stackoverflow
        </a>
        <a href="https://www.linkedin.com/in/georgekatsanos" target="_blank">
          <i class="icon-linkedin-square"></i>
          linkedin
        </a>
        <a href="https://medium.com/@gplusgr" target="_blank">
          <i class="icon-medium"></i>
          medium
        </a>
      </div>
    </div>
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
