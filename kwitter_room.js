
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
        apiKey: "AIzaSyC1HXml5ihj53oQM2uPL6Pmmww3jeHwemM",
  authDomain: "smedia-3.firebaseapp.com",
  databaseURL: "https://smedia-3-default-rtdb.firebaseio.com",
  projectId: "smedia-3",
  storageBucket: "smedia-3.firebasestorage.app",
  messagingSenderId: "781643843147",
  appId: "1:781643843147:web:eea0c3ce03632ee7fe6fce",
  measurementId: "G-PDW23WT3ME"
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
