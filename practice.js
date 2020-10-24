
 var firebaseConfig = {
    apiKey: "AIzaSyCzKyPVSgqKMfc3HtodSE0MifV5gxirboQ",
    authDomain: "kwitter-5857d.firebaseapp.com",
    databaseURL: "https://kwitter-5857d.firebaseio.com",
    projectId: "kwitter-5857d",
    storageBucket: "kwitter-5857d.appspot.com",
    messagingSenderId: "1052985641207",
    appId: "1:1052985641207:web:723e13e4ab0332fb8cabf2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){

    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        msg:"hello"
    });
  }