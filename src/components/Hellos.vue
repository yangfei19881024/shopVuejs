<template>
  <div class="hello">
    <h1 v-on:click="clickMe">{{ msg }}</h1>
    <h2>{{ VueName }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'name'
    }
  }

}
</script>
