var config = {
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
  
  //Reference messages collection
  let messagesRef = firebase.database().ref('Messages');

  //listen to form
  document.getElementById('messagesForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    let uname = getInputVal('uname');
    let message = getInputVal('message');
    
    


function saveMessage(uname, msgContent){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        username: uname,
        message: msgContent,
    })
  }