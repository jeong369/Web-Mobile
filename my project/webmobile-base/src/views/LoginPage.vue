<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs5 text-xs-center>
      <v-layout align-center justify-center row fill-height elevation-5 style="min-height:500px;" white pa-4>
        <v-flex xs12 text-xs-center>
          <v-btn round color="yellow" dart href="/signup" style="width:100%">회원가입</v-btn>
          <SignUp></SignUp>
          <v-btn round color="#df4a31" dark v-on:click="loginWithGoogle" style="width:100%;"><v-icon size="25" class="mr-2">fa-google</v-icon> Google 로그인</v-btn>
          <v-btn round color="#3b5998" dark v-on:click="loginWithFacebook" style="width:100%;"><v-icon size="25" class="mr-2">fa-facebook</v-icon> Facebook 로그인</v-btn>
          <v-btn v-on:click="logout">로그아웃</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'
import SignUp from '@/views/SignUp.vue'

export default {
	name: 'LoginPage',
	data() {
		return {}
	},
	components: {},
	methods: {
    signuppage() {

    },
		async loginWithGoogle() {
      const result = await FirebaseService.loginWithGoogle()
      console.log(result)
			this.$store.state.accessToken = result.credential.accessToken
      this.$store.state.user = result.user
      // location.href="/";
		},
    async loginWithFacebook() {
      const result = await FirebaseService.loginWithFacebook()
      this.$store.state.token = result.credential.accessToken
      this.$store.state.user = result.user
      // location.href="/"
    },
    async logout() {
      FirebaseService.logout()
      
    }
	},
	mounted() {
		console.log(this.$store.state)
	}
}
</script>
