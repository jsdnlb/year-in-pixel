<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <form @submit.prevent="Register">
          <h2 class="title">Register</h2>
          <div class="input-field">
            <font-awesome-icon :icon="['fas', 'user-secret']" class="i" />
            <input type="text" placeholder="E-mail" v-model="email" />
          </div>
          <div class="input-field">
            <font-awesome-icon icon="lock" />
            <font-awesome-icon :icon="['fas', 'user-secret']" />
            <input type="password" placeholder="Password" v-model="password" />
          </div>
          <input type="submit" value="Register" class="btn solid" />
          <p class="social-text">Or Register with social platforms</p>
          <div class="social-media">
            <div href="" class="social-icon">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
            </div>
            <div href="" class="social-icon">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
            </div>
          </div>
        </form>
        <!--  <form @submit.prevent="Register">
      <input type="text" placeholder="E-mail" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Register" />
      <p>Have an account?<router-link to="/login">Login Here</router-link></p>
    </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => console.log(err.message));
    };

    return { email, password, Register };
  },
};
</script>
