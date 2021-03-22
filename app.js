//Initializing Firebase App
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
//I was going to do something with this but for now it just logs whether the User is logged in
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user + "Signed In")
    var user = firebase.auth().currentUser.uid; 
  }
  else {
    console.log("User Not Signed In")
  }
})

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(userInEmail, userInEmail);
  })
  .catch((error) => {
    //Errors
    var errorCode = error.code;
    var errorMessage = error.message;
  });

//All the check functions just make sure something valid was entered
function checkUserFirstName()
{
    var userSurname = document.getElementById("userFirstName").value;
    var flag = false;
    if(userSurname === "")
        flag = true;
    if(flag)
        document.getElementById("userFirstNameError").style.display = "block";
    else
        document.getElementById("userFirstNameError").style.display = "none";
}

function checkUserSurname()
{
    var userSurname = document.getElementById("userSurname").value;
    var flag = false;
    if(userSurname === "")
        flag = true;
    if(flag)
        document.getElementById("userSurnameError").style.display = "block";
    else
        document.getElementById("userSurnameError").style.display = "none";
}

function checkUserEmail()
{
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = true;
    if(userEmail.value.match(userEmailFormate))
        flag = false;
    if(flag)
        document.getElementById("userEmailError").style.display = "block";
    else
        document.getElementById("userEmailError").style.display = "none";
}

function checkUserPassword()
{
    var userPassword = document.getElementById("userPassword");
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag = true;
    if(userPassword.value.match(userPasswordFormate))
        flag = false;
    if(flag)
        document.getElementById("userPasswordError").style.display = "block";
    else
        document.getElementById("userPasswordError").style.display = "none";
}

function checkUserBio()
{
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(flag)
        document.getElementById("userBioError").style.display = "block";
    else
        document.getElementById("userBioError").style.display = "none";
}
function checkGroupName()
{
    var groupName = document.getElementById("groupName").value;
    var flag = false;
    if(groupName === "")
        flag = true;
    if(flag)
        document.getElementById("groupNameError").style.display = "block";
    else
        document.getElementById("groupNameError").style.display = "none";
}

function checkGroupDescription()
{
    var groupDescription = document.getElementById("groupDescription").value;
    var flag = false;
    if(groupDescription === "")
        flag = true;
    if(flag)
        document.getElementById("groupDescriptionError").style.display = "block";
    else
        document.getElementById("groupDescriptionError").style.display = "none";
}

function checkMemberCap()
{
    var memberCap = document.getElementById("memberCap").value;
    var flag = false;
    if(memberCap === "")
        flag = true;
    if(flag)
        document.getElementById("memberCapError").style.display = "block";
    else
        document.getElementById("memberCapError").style.display = "none";
}
function checkUpdatedGroupName()
{
    var updatedGroupName = document.getElementById("updatedGroupName").value;
    var flag = false;
    if(updatedGroupName === "")
        flag = true;
    if(flag)
        document.getElementById("groupNameError").style.display = "block";
    else
        document.getElementById("groupNameError").style.display = "none";
}

function checkUpdatedGroupDescription()
{
    var updatedGroupDescription = document.getElementById("updatedGroupDescription").value;
    var flag = false;
    if(updatedGroupDescription === "")
        flag = true;
    if(flag)
        document.getElementById("groupDescriptionError").style.display = "block";
    else
        document.getElementById("groupDescriptionError").style.display = "none";
}

function checkUpdatedMemberCap()
{
    var updatedMemberCap = document.getElementById("updatedMemberCap").value;
    var flag = false;
    if(updatedMemberCap === "")
        flag = true;
    if(flag)
        document.getElementById("memberCapError").style.display = "block";
    else
        document.getElementById("memberCapError").style.display = "none";
}

//Signs Up users taking input values entered and creating credentials
function signUp()
{
    var userFirstName = document.getElementById("userFirstName").value;
    var userSurname = document.getElementById("userSurname").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userFirstNameFormatValidate = /^([A-Za-z.\s_-])/;    
    var userEmailFormatValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormatValidate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      

    //Matching to make sure inputs are in proper format
    var checkUserFirstNameValid = userFirstName.match(userFirstNameFormatValidate);
    var checkUserEmailValid = userEmail.match(userEmailFormatValidate);
    var checkUserPasswordValid = userPassword.match(userPasswordFormatValidate);

    if(checkUserFirstNameValid == null)
        return checkUserFirstName();
    else if(userSurname === "")
        return checkUserSurname();
    else if(checkUserEmailValid == null)
        return checkUserEmail();
    else if(checkUserPasswordValid == null)
        return checkUserPassword();
    else
        //Creating User and saving data
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => 
        {
            var user = firebase.auth().currentUser;
            var uid;

            if (user != null) 
                uid = user.uid;
            //The child where this data is saved
            var ref = firebase.database().ref('Users');
            var userData = 
            {
                userFirstName: userFirstName,
                userSurname: userSurname,
                userEmail: userEmail,
                userPassword: userPassword,
                userCountry: "Some Country",
                userGrade: "1-12",
                userBio: "User Biography"
            }
            ref.child(uid).set(userData);
            console.log("Account Created");
            window.open("signIn.html");
        }).catch((error) => 
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            document.getElementById("userSignUpError").innerHTML = errorMessage;
        });
}

//Checking Email and Password Formats and showing a message if incorrect
function checkUserInEmail()
{
    var userInEmail = document.getElementById("userInEmail");
    var userEmailFormatValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = true;
    if(userInEmail.value.match(userEmailFormatValidate))
        flag = false;
    if(flag)
        document.getElementById("userInEmailError").style.display = "block";
    else
        document.getElementById("userInEmailError").style.display = "none";
}

function checkUserInPassword()
{
    var userInPassword = document.getElementById("userInPassword");
    var userPasswordFormatValidate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag = true;
    if(userInPassword.value.match(userPasswordFormatValidate))
        flag = false;
    if(flag)
        document.getElementById("userInPasswordError").style.display = "block";
    else
        document.getElementById("userInPasswordError").style.display = "none";
}

//Signs in users taking input values and matching with saved credentials in database
function signIn()
{
    var userInEmail = document.getElementById("userInEmail").value;
    var userInPassword = document.getElementById("userInPassword").value;
    var userEmailFormatValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormatValidate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      

    var checkUserEmailValid = userInEmail.match(userEmailFormatValidate);
    var checkUserPasswordValid = userInPassword.match(userPasswordFormatValidate);

    if(checkUserEmailValid == null)
        return checkUserInEmail();
    else if(checkUserPasswordValid == null)
        return checkUserInPassword();
    else
    {
        console.log("Signing in, please wait.");
        firebase.auth().signInWithEmailAndPassword(userInEmail, userInPassword).then((success) => 
        {
            console.log("Sign In Successful");
            firebase.auth().onAuthStateChanged(function(user) 
            {
                console.log(user.uid);
                if (user) 
                {
                    localStorage.userID = user.uid;
                    window.location = 'index.html';
                }
            });
        //Errors will be logged in console and shown to user (eg: User not found in database)
        }).catch((error) => 
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            document.getElementById("userLoginError").innerHTML = errorMessage;

        });
    }
}
//Take input values from user and saves a user profile (Setting data not updating)
function saveProfile()
{
    let userFirstName = document.getElementById("userFirstName").value 
    let userSurname = document.getElementById("userSurname").value 
    let userCountry = document.getElementById("userCountry").value 
    let userGrade = document.getElementById("userGrade").value 
    let userBio = document.getElementById("userBio").value
    var userFirstNameFormatValidate = /^([A-Za-z.\s_-])/; 
    var checkUserFirstNameValid = userFirstName.match(userFirstNameFormatValidate);
    if(checkUserFirstNameValid == null)
        return checkUserFirstName();
    else if(userSurname === "")
        return checkUserSurname();
    else
    {
        var firebaseRef = firebase.database().ref('Users');
        var userData = 
        {
            userFirstName: userFirstName,
            userSurname: userSurname,
            userCountry: userCountry,
            userGrade: userGrade,
            userBio: userBio
        }
        firebaseRef.child(localStorage.userID).set(userData);
        console.log("Profile Updated");
        window.location="index.html";
    }
}
//User sign out function
function signOut()
{
    firebase.auth().signOut().then(function() 
    {
        console.log("Sign Out Successful");
        window.open("index.html", "_self");
    }).catch(function(error) 
    {
        let errorMessage = error.message;
        console.log(errorMessage);
    });
}

function checkGroupName()
{
    var groupName = document.getElementById("groupName").value;
    var flag = false;
    if(groupName === "")
        flag = true;
    if(flag)
        document.getElementById("groupNameError").style.display = "block";
    else
        document.getElementById("groupNameError").style.display = "none";
}

function checkGroupDescription()
{
    var groupDescription = document.getElementById("groupDescription").value;
    var flag = false;
    if(groupDescription === "")
        flag = true;
    if(flag)
        document.getElementById("groupDescriptionError").style.display = "block";
    else
        document.getElementById("groupDescriptionError").style.display = "none";
}

function checkMemberCap()
{
    var memberCap = document.getElementById("memberCap").value;
    var flag = false;
    if(memberCap === "")
        flag = true;
    if(flag)
        document.getElementById("memberCap").style.display = "block";
    else
        document.getElementById("memberCap").style.display = "none";
}
//Creates Group and saves info from inputs in database under child "Groups"
function signUpGroup()
{
    var groupName = document.getElementById("groupName").value;
    var groupDescription = document.getElementById("groupDescription").value;
    var memberCap = document.getElementById("memberCap").value;
    {
        var firebaseRef = firebase.database().ref("Groups");
        //Data Saved
        var groupData = 
        {
            groupName: groupName,
            groupDescription: groupDescription,
            userId : localStorage.userID,
            memberCap: memberCap,
        }
            firebaseRef.child(groupName).set(groupData);
            document.getElementById("groupCreationText").style.display = "block";
            document.getElementById("groupErrorText").style.display = "none";
            console.log("Group Created");
            window.open("page1.html");
    }       
}
//Function checks whether a group already exists in the database and shows an error message if true
function doesGroupExist()
{
    var groupName = document.getElementById("groupName").value;
    var groupNameRef = firebase.database().ref("Groups");

        //getting snapshot and looking for Group Name 
        groupNameRef.once("value")
          .then(function(snapshot) {
            var hasGroupName = snapshot.hasChild(groupName);
            
          if(hasGroupName == true) {
               document.getElementById("groupErrorText").style.display = "block";
               document.getElementById("groupCreationText").style.display = "none";
            return;
          }else{
            signUpGroup();
          } 
    });
}
//Updating data
function updateMyCreatedGroups()
{
    var groupName = document.getElementById("groupName").value;
    var updatedGroupName = document.getElementById("updatedGroupName").value;
    var updatedGroupDescription = document.getElementById("updatedGroupDescription").value;
    var updatedMemberCap = document.getElementById("updatedMemberCap").value;
    var groupRef = firebase.database().ref("Groups/" + groupName);
    var groupsRef = firebase.database().ref("Groups");
    var myUser = localStorage.userID;
    
    console.log('user = ' + myUser + ', groupName = ' + groupName);
    console.log('groupRef = ' + groupRef);

    groupRef.once("value", function(snapshot) {
      snapshot.forEach(function(child) {
          //Checks if the current user's id is the same as the creator of the group's (if true execute code, else show error)
          if(child.key == 'userId' && child.val() == myUser) {
            //Deleting data and rewriting it
            groupRef.set(null) 
            var groupData = 
            {
                groupName: updatedGroupName,
                groupDescription: updatedGroupDescription,
                userId : localStorage.userID,
                memberCap: updatedMemberCap,
            }
            groupsRef.child(updatedGroupName).set(groupData);
            document.getElementById("groupEditorText").style.display = "block";
            document.getElementById("permissionsText").style.display = "none";
            window.location.reload();
            return;
          }else{
            console.log("User does not have Permission to Edit this Group")
            document.getElementById("permissionsText").style.display = "block";
            document.getElementById("groupEditorText").style.display = "none";
            return;
          }
      });
    });
}  
//Shows groups created by user
function showMyCreatedGroups()
{
    var groupsRef = firebase.database().ref("Groups");
    var myUser = localStorage.userID;
    groupsRef.orderByChild("userId").equalTo(myUser).once("value").then((results) => {
        results.forEach((snapshot) => {
            console.log(snapshot.key, snapshot.val());
            var groupData = snapshot.val();
            //Getting the values of each node from snapshot
            var groupNme = groupData.groupName;
            var groupDesc = groupData.groupDescription;
            var memCap = groupData.memberCap;
            console.log("groupName = " + groupNme + ", groupDescription = " + groupDesc + ", memCap = " + memCap)
            //Creating html table and inserting rows
            var table = document.getElementById("myCreatedGroupsTable");
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var rowStr = '<tr>' +
                '<td style="width: 100px;">' + groupNme + '</td>' +
                '<td style="width: 100px;">' + groupDesc + '</td>' +
                '<td style="width: 100px;">' + memCap + '</td>' +
                '</tr>';
            console.log("rowStr = " + rowStr);
            row.innerHTML= rowStr;
        })
      });
}
/*
function showAllCreatedGroups()
{
    var groupsRef = firebase.database().ref("Groups");
    groupsRef.orderByChild("groupName").once("value").then((results) => {
        results.forEach((snapshot) => {
            console.log(snapshot.key, snapshot.val());
            var groupData = snapshot.val();
            //Getting the values of each node from snapshot
            var groupNme = groupData.groupName;
            var groupDesc = groupData.groupDescription;
            var memCap = groupData.memberCap;
            console.log("groupName = " + groupNme + ", groupDescription = " + groupDesc + ", memCap = " + memCap)
            //Creating html table and inserting rows
            var table = document.getElementById("allGroupsTable");
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var rowStr = '<tr>' +
                '<td style="width: 100px;">' + groupNme + '</td>' +
                '<td style="width: 100px;">' + groupDesc + '</td>' +
                '<td style="width: 100px;">' + memCap + '</td>' +
                '</tr>';
            console.log("rowStr = " + rowStr);
            row.innerHTML= rowStr;
        });
    });
}
*/
//Function for deleting groups created by user
function deleteMyCreatedGroups()
{
    //setting variables
    var groupName = document.getElementById("groupName").value;
    var groupRef = firebase.database().ref("Groups/" + groupName);
    var firebaseRef = firebase.database().ref("Groups");
    var myUser = localStorage.userID;
    
    console.log('user = ' + myUser + ', groupName = ' + groupName);
    console.log('groupRef = ' + groupRef);

    //Getting snapshot of the data, comparing User ids and then setting group as null
    groupRef.once("value", function(snapshot) {
      snapshot.forEach(function(child) {
          console.log('key=' + child.key + ', value=' + child.val());
          if(child.key == 'userId' && child.val() == myUser) {
            groupRef.set(null)
            document.getElementById("groupDeletedText").style.display = "block";
            document.getElementById("permissionsText").style.display = "none";
            window.location.reload();
            return;
          }else{
            console.log("User does not have Permission to Delete this Group");
            document.getElementById("permissionsText").style.display = "block";
            document.getElementById("groupEditorText").style.display = "none";
            return;
              
          }

      });
    });
}
    
    


