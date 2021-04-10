import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import { firebaseConfig } from "./firebase.config";

// Import Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
