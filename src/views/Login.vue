<template>
  <div class="container">
    <br/>
    <b-card id="bg-1" class="offset-md-1 col-10">
      <b-btn variant="success" class="mr-4" @click="login"
        >Login by Google</b-btn
      >
      <b-btn variant="danger" @click="logout">Log out</b-btn>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/main.js";
export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();

      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log(user);
          this.$router.replace("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      auth
        .signOut()
        .then(() => {
          console.log("Sign-out successful.");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#bg-1 {
  background-color: rgb(131, 130, 130);
}
</style>
