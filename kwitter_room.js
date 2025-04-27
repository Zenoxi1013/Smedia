
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCWrkyu8GmIftpG2hHArzQu5et-1Bk8jw4",
      authDomain: "smedia-d2a6e.firebaseapp.com",
      databaseURL: "https://smedia-d2a6e-default-rtdb.firebaseio.com",
      projectId: "smedia-d2a6e",
      storageBucket: "smedia-d2a6e.firebasestorage.app",
      messagingSenderId: "406654311575",
      appId: "1:406654311575:web:814e60b2451d54056b9dd2"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " +user_name+ "!"; 

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";




}
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
      console.log("Room Name - " + Room_name);       
      row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)' >" + Room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}
