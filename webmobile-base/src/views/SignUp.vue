<template>
  <div class="mt-5">

    <ImgBanner imgSrc="https://source.unsplash.com/collection/583479">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">signup</div>
    </ImgBanner>
    <v-container>
        <SignUp></SignUp>
    </v-container>
    </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import SignUp from '../components/SignUp'

export default {
  name : 'signup',
  components : {
    ImgBanner,
    SignUp,
  },
  methods : {
    // writeUserData(userId, name, email, imageUrl) {
    //   firebase.database().ref('users/' + userId).set({
    //     username: name,
    //     email: email,
    //     profile_picture : imageUrl
    //   })
    // },
  }
  //   $_veeValidate: {
  //     validator: 'new'
  //   },
  //
  //   data: () => ({
  //     name: 'signup',
  //   	components: {
  //   		ImgBanner,
  //       SignUp,
  //   	},
  //     email: '',
  //     select: null,
  //     items: [
  //       'Seoul',
  //       'Daejeon',
  //       'Busan',
  //       'Jeju',
  //     ],
  //     checkbox: null,
  //     dictionary: {
  //       attributes: {
  //         email: 'E-mail Address'
  //         // custom attributes
  //       },
  //       custom: {
  //         name: {
  //           required: () => 'Name can not be empty',
  //           max: 'The name field may not be greater than 10 characters'
  //           // custom messages
  //         },
  //         select: {
  //           required: 'Select field is required'
  //         }
  //       }
  //     }
  //   }),
  //
  //   mounted () {
  //     this.$validator.localize('en', this.dictionary)
  //   },
  //
  //   methods: {
  //     submit () {
  //       this.$validator.validateAll()
  //     },
  //     clear () {
  //       this.name = ''
  //       this.email = ''
  //       this.select = null
  //       this.checkbox = null
  //       this.$validator.reset()
  //     }
  //   }
  // }
}
</script>
