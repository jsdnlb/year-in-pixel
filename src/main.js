import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .mount("#app");
