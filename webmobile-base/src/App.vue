<template>
  <v-app>
    <Header id="header">
    </Header>

    <v-content>
      <router-view/>
    </v-content>

    <Footer>
    </Footer>

  </v-app>
</template>

<script>
import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
	name: 'App',
	store,
  components :{
    Header,
    Footer,
  },
	data() {
		return {
			//
		}
	},
  // beforeCreated() {
  //   if (navigator.userAgent.toLowerCase().indexOf("chrome") != 81) {
  //     // != 81
  //     alert("해당 사이트는 크롬에 최적화 되어 있습니다.")
  //   } else {
  //     console.log("1")
  //   }
  // }
}
</script>
