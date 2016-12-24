<template>
  <div>
    <position v-bind:position="position" v-for="position in positions"></position>
  </div>
</template>

<script>
  import position from '../Position/Position'
  import positions from '../../store/positions.js'

  export default {
    components: {
      position
    },
    name: 'resume',
    data () {
      return {
        positions
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
