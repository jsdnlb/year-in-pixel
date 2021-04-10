<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <form @submit.prevent="Login" class="sign-in-form">
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <font-awesome-icon :icon="['fas', 'user-secret']" class="i" />
            <input type="text" placeholder="E-mail" v-model="email" />
          </div>
          <div class="input-field">
            <font-awesome-icon icon="lock" />
            <font-awesome-icon :icon="['fas', 'user-secret']" />
            <input type="password" placeholder="Password" v-model="password" />
          </div>
          <input type="submit" value="Login" class="btn solid" />
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <div href="" class="social-icon">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
            </div>
            <div href="" class="social-icon">
              <font-awesome-icon :icon="['fas', 'user-secret']" />
            </div>
          </div>

          <!-- 
          <p>
            Nedd an account?<router-link to="/register"
              >Register Here</router-link
            >
          </p> -->
        </form>

        <form @submit.prevent="Register" class="sign-up-form">
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
      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New Here?</h3>
          <p>
            Register an account<router-link to="/register"
              >Register Here</router-link
            >
          </p>
          <button class="btn transparent" id="sign-up-btn">Sign Up</button>
        </div>
        <img src="../assets/img/ordinary-day.svg" alt="" class="image" />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h3>One of us?</h3>
          <p>
            <router-link to="/login">Login Here</router-link>
          </p>
          <button class="btn transparent" id="sign-in-btn">Sign In</button>
        </div>
        <img src="../assets/img/calendar.svg" alt="" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };

    return {
      Login,
      email,
      password,
    };
  },
  mounted: function () {
    // Login animations

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}

.container::before {
  content: "";
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background: linear-gradient(-45deg, #4481eb, #04befe);
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  z-index: 6;
  transition: 1.8s ease-in-out;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 0 5rem;
  overflow: hidden;
  transition: 0.2s 0.7s ease-in-out;
}

form.sign-in-form {
  z-index: 2;
}

form.sign-up-form {
  z-index: 1;
  opacity: 0;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 300px;
  width: 100%;
  height: 55px;
  background: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0.4 rem;
}

.input-field svg {
  margin: 17px;
  color: #acacac;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.btn {
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background: #5995fd;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  color: #333;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: 0.3s;
  padding-top: 11px;
}

.social-icon:hover {
  color: #4d84e2;
  border-color: #4d84e2;
}

.panels-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: 0.9s 0.6s ease-in-out;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.image {
  width: 100%;
  transition: 1.1s 0.4s ease-in-out;
}

.right-panel .content,
.right-panel .image {
  transform: translateX(800px);
}

// Animation
.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translate(-800px);
}

.container.sign-up-mode .right-panel .content,
.container.sign-up-mode .right-panel .image {
  transform: translateX(0px);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-in-form {
  z-index: 1;
  opacity: 0;
}

.container.sign-up-mode form.sign-up-form {
  z-index: 2;
  opacity: 1;
}

// Responsive

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }

  .container:before,
  .panels-container {
    display: none;
  }

  .signin-signup {
    width: 100%;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
  }

  .panels-container {
    background-color: green;
    z-index: 10;
  }

  .right-panel .content,
  .right-panel .image {
    transform: translateX(0px);
  }
}
</style>