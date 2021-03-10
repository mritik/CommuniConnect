const firebaseConfig = {
      apiKey: "AIzaSyDsCfVVy7bHnGaKoVZ_ikwzahwQycMQoMs",
      authDomain: "user-auth-d707b.firebaseapp.com",
      databaseURL: "https://user-auth-d707b-default-rtdb.firebaseio.com",
      projectId: "user-auth-d707b",
      storageBucket: "user-auth-d707b.appspot.com",
      messagingSenderId: "549822857981",
      appId: "1:549822857981:web:7c15df144daf04f6e7b494",
      measurementId: "G-QH58VF587C"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value).then((success) => 
    {
        promise.catch(e => alert(e.message));
        window.location = 'index.html';
        alert("Signed Up");

    })
}

function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value).then((success) => 
    {
        promise.catch(e => alert(e.message));
        window.location = 'index.html';
        alert("Signed Up");

    })

}

function signOut()
{
    firebase.auth().signOut().then(function() 
    {
        console.log("Sign Out Successful");
        window.open("login.html");
        alert("Signed Out")
    }).catch(function(error) 
    {
        let errorMessage = error.message;
        console.log(errorMessage);
    });
}
