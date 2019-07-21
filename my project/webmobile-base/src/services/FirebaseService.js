import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'posts'
const PORTFOLIOS = 'portfolios'

// Setup Firebase
const config = {
	projectId: 'dj-til-project',
	authDomain: 'dj-til-project.firebaseapp.com',
	apiKey: 'AIzaSyCS4j6Gvdph6qGItXF1wiv1jDPLV9s2ukU',
	databaseURL: 'https://dj-til-project.firebaseio.com',
	storageBucket: ''
}

firebase.initializeApp(config)
const firestore = firebase.firestore()
// var database = firebase.database();


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
	// CreateUser(email, password) {
	// 	console.log('e', email)
	// 	console.log('p', password)
	// 	return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// 		// Handle Errors here.
	// 		var errorCode = error.code;
	// 		var errorMessage = error.message;
	// 		// ...
	// 	  });
	// },
	loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		// console.log("p", provider)
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			alert("Google Welcome!")
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
		  	return result
		}).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  var email = error.email;
		  var credential = error.credential;
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
