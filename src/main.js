import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCyu1LlM-Dv-kLyWFbIWPZeOR6w33tP218",
    authDomain: "pixel-in-year.firebaseapp.com",
    projectId: "pixel-in-year",
    storageBucket: "pixel-in-year.appspot.com",
    messagingSenderId: "624026918790",
    appId: "1:624026918790:web:c9d41f751a0e1d733c1607"
  };

  firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
