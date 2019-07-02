<template>
  <v-toolbar fixed >
    <v-toolbar-title>INJEONG</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="menu">
      <v-btn flat href="/">HOME</v-btn>
      <v-btn flat href="/post" class="hidden-sm-and-down">POST</v-btn>
      <v-btn flat href="/portfolio" class="hidden-sm-and-down">PORTFOLIO</v-btn>
      <v-btn flat href="/login" class="hidden-sm-and-down">LOGIN</v-btn>
      <!-- <v-btn flat><i class="material-icons hidden-md-and-up">menu</i></v-btn> -->
      <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn flat
                icon
                v-on="on"
              >
                <i class="material-icons hidden-md-and-up">menu</i>
              </v-btn>
            </template>

            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
                :href="item"
              >
                <v-list-tile-title>{{item}}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

    </v-toolbar-items>
  </v-toolbar>

</template>

<script>
  export default {
    name: 'Header',
    data () {

      return {
        items: [
          'POST', 'PORTFOLIO', 'LOGIN'
        ],
        right: null
      }
    },
  }
</script>
<style>
/* @media only screen and (min-width:600px){
  .baricon {display:none;}
} */
</style>
