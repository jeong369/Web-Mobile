<template>
  <v-toolbar fixed >
    <v-toolbar-title id="title">INJEONG's <span style="font-size:15px;">
      생각하는</span> BLOG</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="menu">
      <v-btn flat><i v-on:click="register" id="staricon" class="material-icons" style="color:yellowgreen">star_border</i></v-btn>
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
      <div id="upbtn" class="mt-3" style="display:none;">
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
        document.documentElement.scrollTop = 0;
      },
      register : function() {
        var star = document.getElementById("staricon")
        var bookmark_url = document.location.href
        var bookmark_name = document.getElementById("title").innerText
        if (star.innerText == "star_border") {
           if (document.all) {
             try {
               window.external.AddFavorite(bookmark_url,bookmark_name);
               star.innerText = "star"
               alert('즐겨찾기에 등록 되었습니다.')
             } catch(e) {
               alert('이 브라우저는 즐겨찾기 추가 기능을 지원하지 않습니다.')
               return false;
             }
          } else if (window.chrome) {
            console.log(window.chrome)
              alert("현재 브라우저에서는 Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
           }
        } else {
          star.innerText = "star_border"
        }
      }
    },
  }
  window.onscroll = function() {
    var upbtn = document.getElementById("upbtn")
    if (document.documentElement.scrollTop != 0) {
      upbtn.style.display = "block";
    }
    else {
      upbtn.style.display = "none";
    }

  }
</script>

<style>
@media (min-width:900px){
  .sidemenu {display:none;}
}
/* @media (height:0px) {
  .upbtn {
    display:none;
  }
} */
</style>
