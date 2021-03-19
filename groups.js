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

//Reference messages collection
let messagesRef = firebase.database().ref('Groups');

//listen to form
document.getElementById('groupSignUp').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
  
    // get Values
    let groupName = document.getElementById('groupName').value;
    let groupDescription = document.getElementById('groupDescription').value;
    let memberCap = document.getElementById('memberCap').value;

    signUpGroup(groupName, groupDescription, memberCap);
    
    //clear form
    document.getElementById('groupSignUp').reset();

  function signUpGroup(groupName, groupDescription, memberCap){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: groupName,
        description: groupDescription,
        memberCap: memberCap,
    })
  }
}

const database = firebase.database();
const rootRef = database.ref('Groups');
rootRef.orderByKey().on('value', data => {
  console.log(data.val());

  var group = data.val();
  var keys = Object.keys(group)
  console.log(keys)
  for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var name = group[k].groupName
      var description = student[k].groupDescription
      var memberCap = student[k].memberCap
      console.log(name, description, memberCap);
      