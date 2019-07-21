- user login/logout 상태 감지


```javascript
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
    } else {
        // No User is signed in.
    }
})
```

- email 인증 방법
  - 가입 : Auth.createUserWithEmailAndPassword()
  - 인증 : Auth.signInEmailAndPassword()
  - 정보 업데이트 : User.updateProfile()
- 회원 정보 업데이트

```javascript
var user = firebase.auth().currentUser;

user.updateProfile({
    displayName : '____'
    photoURL: "_____"
}).then(function() {
    
}.function(error) {
    
});
```



- 제공업체와 기본 정보 연결하기

<https://firebase.google.com/docs/auth/web/account-linking?hl=ko>



- savename

```javascript
   // saveName(name, user) {
   //    console.log("이름 저장")
   //    console.log(name, user)

      // 업데이트는 되지만
      // user.updateProfile({
      //    displayName: name
      // })
      // 찍히지는 않는다.
      // console.log("name", user.providerData[0].displayName)
      
      // createdate 가져오기
      // var d = user.metadata.creationTime
      // console.log(d)
      
      // firestore에 넣기
      // firestore.collection("Users").doc(user.uid).set({
      //    name: name,
      //    email: user.email,
      //    createTime : d
      // }).then(function() {
      //    console.log("저장 성공")
      // }).catch(function(error) {
      //    console.log("저장 실패ㅠㅠ")
      // })

   // },
```







- signup.vue

```vue
<template>
  <form>
            <v-flex xs12 sm6>
                <v-text-field
                    v-model="name"
                    :rules="[rules.required, rules.counter]"
                    label="Name"
                    counter
                    maxlength="20"
                ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                ></v-text-field>
                </v-flex>

            <v-flex xs12 sm6>
                <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>
            </v-flex>
        </form>
</template>


<script>


  export default {
        $_veeValidate: {
      validator: 'new'
    },
    name: 'signup',
    data: () => ({
      show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),   
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
      name: '',
      email: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }
    ),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      

    }
  }
</script>
```



- signuppage

```vue
<template>
  <div class="mt-5">

    <ImgBanner imgSrc="https://source.unsplash.com/collection/583479">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">signup</div>
    </ImgBanner>
    <v-container>
        <!-- signup page -->
          <!-- 가입하는 username -->
          <v-flex xs12 sm6>
                <v-text-field
                    v-model="name"
                    :rules="[rules.required, rules.counter]"
                    label="Name"
                    counter
                    maxlength="20"
                ></v-text-field>
          </v-flex>
          <!-- 가입하는 useremail -->
          <v-flex xs12 sm6>
            <v-text-field
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="E-mail"
            ></v-text-field>
          </v-flex>
          <!-- 가입하는 userpassword -->
          <v-flex xs12 sm6>
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
          </v-flex>
          
          <v-btn id="btn_submit" @click="submit">signup</v-btn>
          <v-btn @click="clear">clear</v-btn>

        <!-- <div class="row">
            <div class="input-field">

                <label for="input_mail">Email</label>
                <input v-model="email" id="input_mail" type="email" class="validate" placeholder="메일 주소를 입력하세요">
            </div>
            <div class="input-field">

                <label for="input_password">Password</label>
                <input v-model="password" id="input_password" type="password" class="validate" placeholder="비밀번호를 입력하세요(8자 이상)">
            </div>
            <div class="input-field">
                <v-btn id="btn_submit" @click="submit">signup</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </div>
        </div> -->

        

    </v-container>
    </div>
</template>





<script>
import ImgBanner from '../components/ImgBanner'
// import SignupPage from '../components/SignupPage'
import Vue from 'vue'
import FirebaseService from '@/services/FirebaseService'

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    name: 'signup',
    data: () => ({
      show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),   
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
      name: '',
      email: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }
    ),
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
        submit () {
          let name = this.name
          let email = this.email
          // console.log(email)
          let password = this.password
          // console.log(password)
          
          // create user for email/password
          FirebaseService.CreateUser(email, password)
          // this.name = ''
          // this.email = ''
          // this.password = ''
        
        },

    }
  }

// export default {

//   name : 'signup',
//   components : {
//     ImgBanner,
//     // SignupPage,
//   },
//   data() {
//       return {
//         email : '',
//         password : ''
//       }

//   },
// //   watch: {
// //       getemail: function(){
// //           this.email = 
// //       }
// //   },
//   methods : {
//       submit () {
//         let email = this.email
//         // console.log(email)
//         let password = this.password
//         // console.log(password)
        
//         // create user for email/password
//         FirebaseService.CreateUser(email, password)
//         this.email = ''
//         this.password = ''
        
//         },
//       // async CreateUser() {
        
//       // },
//       clear () {
//         this.name = ''
//         this.email = ''
//         this.password = ''
//         this.select = null
//         this.checkbox = null
//         this.$validator.reset()
//       },

//   }
// }
</script>

```



- firestorage

```javascript
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase/storage'

const POSTS = 'posts'
const PORTFOLIOS = 'portfolios'

// Setup Firebase
// const config = {
// 	projectId: 'elice-ssafy',
// 	authDomain: 'elice-ssafy.firebaseapp.com',
// 	apiKey: 'AIzaSyCax1KLYHHlLEoxNkRIW8efgUBWooyEB2Q',
// 	databaseURL: 'https://elice-ssafy.firebaseio.com',
// 	storageBucket: 'gs://elice-ssafy.appspot.com'
// }
const config = {
	projectId: 'dj-til-project',
	authDomain: 'dj-til-project.firebaseapp.com',
	apiKey: 'AIzaSyCS4j6Gvdph6qGItXF1wiv1jDPLV9s2ukU',
	databaseURL: 'https://dj-til-project.firebaseio.com',
	storageBucket: 'gs://dj-til-project.appspot.com',
}

firebase.initializeApp(config)
const firestore = firebase.firestore()

// firestore collection에 data 넣기
// firestore.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
// firestore.collection("users").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
// 	country: "USA",
// 	content: "hi"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });


// firestore data 불러오기
// firestore.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });


// storage에 저장
// const storage = firebase.storage()
// var storageRef = storage.ref()



export default {
	getPosts() {
		const postsCollection = firestore.collection(POSTS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						data.created_at = new Date(data.created_at.toDate())
						return data
					})
				})
	},
	postPost(title, body) {
		return firestore.collection(POSTS).add({
			title,
			body,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	getPortfolios() {
		const postsCollection = firestore.collection(PORTFOLIOS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						data.created_at = new Date(data.created_at.toDate())
						return data
					})
				})
	},
	postPortfolio(title, body, img) {
		return firestore.collection(PORTFOLIOS).add({
			title,
			body,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			alert("Google Welcome!")
			location.href="/";
			return result
		}).catch(function(error) {
			console.error('[Google Login Error]', error)
		})
	},
	loginWithFacebook() {
		let provider = new firebase.auth.FacebookAuthProvider()
		console.log(provider.credential.accessToken)
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let token = result.credential.accessToken
  			let user = result.user
			alert("Facebook Welcome!")
			location.href="/";
		  	return result
		}).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  var email = error.email;
		  var credential = error.credential;
		})
	},
	CreateUser(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
			alert("회원가입 성공!")
			location.href="/";
        }).catch(function(error) {
        var errorCode = error.code;
        // var errorMessage = error.message;
        alert(error.message)
      })
	},
	logout() {
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		  console.log("로그아웃")
		}).catch(function(error) {
		  // An error happened.
		})
	},
}
```



- 챗봇 blog 
- <https://cionman.tistory.com/56>


