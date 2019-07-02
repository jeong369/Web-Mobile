<template>
  <v-toolbar fixed>
    <v-toolbar-title>INJEONG</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat href="/">HOME</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Header',
    data () {

      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
      }
    }
  }
</script>
<style>

</style>
