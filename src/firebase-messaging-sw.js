importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA4hin2WkwM5VlvPLbIrjwsN7pf0NYj778",
    authDomain: "simple-pwa-5293e.firebaseapp.com",
    databaseURL: "https://simple-pwa-5293e.firebaseio.com",
    projectId: "simple-pwa-5293e",
    storageBucket: "",
    messagingSenderId: "404418950856"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
    const title = "Simple PWA";
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title,options);
});