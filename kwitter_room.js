
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAZmN8jUnGwruuZF5PV-tYoIO-siig2zcE",
      authDomain: "smedia-2.firebaseapp.com",
      databaseURL: "https://smedia-2-default-rtdb.firebaseio.com",
      projectId: "smedia-2",
      storageBucket: "smedia-2.firebasestorage.app",
      messagingSenderId: "461919494598",
      appId: "1:461919494598:web:e0f9d2112307f5451b12c7"
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
