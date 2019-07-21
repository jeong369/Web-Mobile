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
    <!-- <v-text-field
      v-model="name"
      v-validate="'required|max:10'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      v-validate="'required'"
      :items="items"
      :error-messages="errors.collect('select')"
      label="Select"
      data-vv-name="select"
      required
    ></v-select> -->
    <!-- <v-checkbox
      v-model="checkbox"
      v-validate="'required'"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="Option"
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox> -->

    <v-btn @click="submit">signup</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>


<script>
  import Vue from 'vue'
  import FirebaseService from '@/services/FirebaseService'

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
      select: null,
      items: [
        'Seoul',
        'Daejeon',
        'Busan',
        'Jeju'
      ],
      checkbox: null,
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
        this.$validator.validateAll()
        let email = this.email
        let password = this.password
        // FirebaseService.CreateUser(email, password)
      },
      // async CreateUser() {
        
      // },
      clear () {
        this.name = ''
        this.email = ''
        this.password = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      },
      //   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // ...
      // })
    }
  }
</script>
