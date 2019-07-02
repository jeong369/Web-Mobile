<template>
  <v-toolbar fixed >
    <v-toolbar-title>INJEONG's <p class="d-inline" style="font-size:15px;">생각하는</p> BLOG</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="menu">
      <v-btn flat href="/">HOME</v-btn>
      <v-btn flat href="/post" class="hidden-sm-and-down">POST</v-btn>
      <v-btn flat href="/portfolio" class="hidden-sm-and-down">PORTFOLIO</v-btn>
      <v-btn flat href="/login" class="hidden-sm-and-down">LOGIN</v-btn>
      <!-- <v-btn flat><i class="material-icons hidden-md-and-up">menu</i></v-btn> -->
      <div class="sidemenu mt-1">
        <v-menu bottom left  class="sidemenu">
              <template v-slot:activator="{ on }">
                <v-btn flat
                  icon
                  v-on="on"
                >
                  <i class="material-icons">menu</i>
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
      </div>
      <div class="upbtn mt-3">
        <v-btn flat v-on:click="pageup">
          <i class="material-icons" height="1rem">expand_less</i>
        </v-btn>
      </div>


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
    methods: {
      pageup : function() {
        // console.log(document.documentElement)
        // document.documentElement.animate( { scrollTop : 0 }, 680 )
        document.documentElement.scrollTop = 0;
        // console.log(document.documentElement)
        // e.view.scrollTop(0);

      }
    },
  }
</script>

<style>
@media (min-width:600px){
  .sidemenu {display:none;}
}
@media (height:0px) {
  .upbtn {
    display:none;
  }
}
</style>
