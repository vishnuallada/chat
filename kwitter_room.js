var firebaseConfig = {
    apiKey: "AIzaSyBq8jIriOY-KCaBDfDsW3d5_tROti7YiEE",
    authDomain: "universalchat-9159e.firebaseapp.com",
    databaseURL: "https://universalchat-9159e-default-rtdb.firebaseio.com",
    projectId: "universalchat-9159e",
    storageBucket: "universalchat-9159e.appspot.com",
    messagingSenderId: "349151669612",
    appId: "1:349151669612:web:0f15f0aa0fda008b3c1749"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){
    roomname = document.getElementById("roomname").value;
    localStorage.setItem("roomname",roomname);
    firebase.database().ref("/").child(roomname).update({
                purpose:"adding room name"         
    });
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("createdrooms").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("createdrooms").innerHTML += row;
            //End code
});});}

getData();


