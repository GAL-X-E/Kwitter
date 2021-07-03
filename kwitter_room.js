var firebaseConfig = {
      apiKey: "AIzaSyCdX6r8DnjGu5NaJMDZV7D_nkjV8SdXJ3k",
      authDomain: "let-s-chat-48e25.firebaseapp.com",
      databaseURL: "https://let-s-chat-48e25-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-48e25",
      storageBucket: "let-s-chat-48e25.appspot.com",
      messagingSenderId: "879226919204",
      appId: "1:879226919204:web:4f905629fc6e4ecc327bb1",
      measurementId: "G-FZ36VYG7CK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
