<template>
  <div><br/>
  <b-card style="color:black" class="offset-md-1 col-10">
    <img :src="photoUrl" height="500"/>
    <br/>
    Name : {{ name }}
    <br/>
    G-mail : {{ email }}
    <br/>
    <b-btn variant="danger" @click="logout">Log out</b-btn></b-card>
  </div>
</template>

<script>
import { auth } from '@/main.js'
export default {
  data() {
    return {
      name: '',
      email: '',
      photoUrl: ''
    }
  },
  created() {
    this.getData()
  },
  // ..................
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        this.name = user.displayName
        this.email = user.email
        this.photoUrl = user.photoURL
      } else {
        // No user is signed in.
        this.$router.replace('/login')
      }
    })
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.')
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  }
}
</script>

<style></style>
