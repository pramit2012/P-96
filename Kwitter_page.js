var firebaseConfig = {
    apiKey: "AIzaSyAwP0nPVg-R2Xze7mepIjWOOTcfr3Tblgw",
    authDomain: "let-s-chat-web-app-375b4.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-375b4-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-375b4",
    storageBucket: "let-s-chat-web-app-375b4.appspot.com",
    messagingSenderId: "49362221387",
    appId: "1:49362221387:web:0fa7ca72d367946a57d0ce",
    measurementId: "G-XZL1Z28YMY"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value = "";
  }
//YOUR FIREBASE LINKS
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();