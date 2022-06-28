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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
     console.log("Room Name - " + Room_names);
     row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
}
function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}