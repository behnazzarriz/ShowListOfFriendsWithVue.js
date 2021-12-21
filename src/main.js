import { createApp } from 'vue';
import App from './App.vue';
import FriendContent from "./components/FriendContent";
import NewContact from "./components/NewContact";
const app=createApp(App);
app.component('friend-contact',FriendContent);
app.component('new-contact',NewContact);
app.mount('#app');

