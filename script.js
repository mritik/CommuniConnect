var provider = new firebase.auth.EmailAuthProvider();
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var config = 
        {
            apiKey: "AIzaSyDsCfVVy7bHnGaKoVZ_ikwzahwQycMQoMs",
            authDomain: "user-auth-d707b.firebaseapp.com",
            databaseURL: "https://user-auth-d707b-default-rtdb.firebaseio.com",
            projectId: "user-auth-d707b",
            storageBucket: "user-auth-d707b.appspot.com",
            messagingSenderId: "549822857981",
            appId: "1:549822857981:web:7c15df144daf04f6e7b494",
            measurementId: "G-QH58VF587C"
        };

        firebase.initializeApp(config);
        var database = firebase.database();
        var ref = database.ref('MessageInfo');
        ref.once('value')

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = messagebox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});


function saveMessage() 
        {
            var database = firebase.database();
            var ref = database.ref('MessageInfo');
            
            var message = document.getElementById("messagebox").value;
            var user = document.getElementById("user").value;

            var data = 
            {
                messageData: message,
                username: user
            }
            ref.child(user).set(data);
            ref = database.ref('MessageInfo/'+ message);
            ref.once('value');
        }