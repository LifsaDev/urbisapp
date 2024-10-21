// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDy-TLQ7sI8t-129nyfpg_FK3GMonlE8FM",
    authDomain: "dorsiamanagement-49918.firebaseapp.com",
    projectId: "dorsiamanagement-49918",
    storageBucket: "dorsiamanagement-49918.appspot.com",
    messagingSenderId: "515161801766",
    appId: "1:515161801766:web:04a0bacd27aaaec1ba52e7",
    measurementId: "G-84KSHPT8XC"
  };
  
const app = initializeApp(firebaseConfig);  
const messaging = firebase.messaging(app);

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: '/firebase-logo.png' // Optional icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
