// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js");
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyD6FESJnWvkkZCkCuL2jL1Mi06vjylT1GI",
  authDomain: "notification-3eb8a.firebaseapp.com",
  projectId: "notification-3eb8a",
  storageBucket: "notification-3eb8a.appspot.com",
  messagingSenderId: "662637249214",
  appId: "1:662637249214:web:c831cd5c75eb2f29ab94ef",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
