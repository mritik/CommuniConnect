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


function signUp()
{
    var userFirstName = document.getElementById("userFirstName").value;
    var userSurname = document.getElementById("userSurname").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userFirstNameFormatValidate = /^([A-Za-z.\s_-])/;    
    var userEmailFormatValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormatValidate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      

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
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => 
        {
            var user = firebase.auth().currentUser;
            var uid;

            if (user != null) 
                uid = user.uid;
            
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
        });
}

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
        }).catch((error) => 
        {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }
}

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

function signUpGroup()
{
    var groupName = document.getElementById("groupName").value;
    var groupDescription = document.getElementById("groupDescription").value;
    var memberCap = document.getElementById("memberCap").value;
    {
        var firebaseRef = firebase.database().ref("Groups");
        var groupData = 
        {
            groupName: groupName,
            groupDescription: groupDescription,
            userId : localStorage.userID,
            memberCap: memberCap,
        }
            firebaseRef.child(groupName).set(groupData);
            document.getElementById("groupCreationText").style.display = "block";
            console.log("Group Created");
            window.open("page1.html");
    }

        
}

function updateMyCreatedGroups()
{
    var myUserId = firebase.auth().currentUser.uid;
    var groupName = document.getElementById("groupName").value;
    var groupDescription = document.getElementById("groupDescription").value;
    var memberCap = document.getElementById("memberCap").value;
    var updatedGroupName = document.getElementById("updatedGroupName").value;
    var updatedGroupDescription = document.getElementById("updatedGroupDescription").value;
    var updatedMemberCap = document.getElementById("updatedMemberCap").value;
    
    var firebaseRef = firebase.database().ref("Groups/" + groupName);
    if (myUserId == firebaseRef)
        firebaseRef.update('groupName')({
        groupName: updatedGroupName,
        groupDescription: updatedGroupDescription,
        memberCap: updatedMemberCap,
    });
    else
        console.log("User does not have Permission to Edit this Group");
        document.getElementById("groupEditorText").style.display = "block";

    
}


/*function updateMyCreatedGroups()
{
    var myUserId = firebase.auth().currentUser.uid;
    var groupName = document.getElementById("groupName").value;
    var groupDescription = document.getElementById("groupDescription").value;
    var memberCap = document.getElementById("memberCap").value;
    var updatedGroupName = document.getElementById("updatedGroupName").value;
    var updatedGroupDescription = document.getElementById("updatedGroupDescription").value;
    var updatedMemberCap = document.getElementById("updatedMemberCap").value;
    
    firebase.database().ref("Groups/" + groupName + "/" + myUserId).once(
    
    "value", snapshot => {
    if (snapshot.exists()){
        console.log("User Access Verified");
    
        firebaseRef.update('groupName')({
            
        groupName: updatedGroupName,
        groupDescription: updatedGroupDescription,
        memberCap: updatedMemberCap,
       
        }
    )}};
    else
        console.log("User does not have Permission to Edit this Group");
        document.getElementById("groupEditorText").style.display = "block"; 
    )
}
*/   
    
    
    
    
    

function showMyCreatedGroups()
{
    var database = firebase.database();
    var myUserId = firebase.auth().currentUser.uid;
    var myGroups = firebaseRef.collection("Groups").where("userId", "==", myUserId.uid).get()
    document.getElementById("myCreatedGroups").innerHTML = myGroups;
}

/*
function showAllGroups()
{
    var allGroups = firebase.database().ref("Groups");
    allGroups.on('value', (snapshot) => {
        const data = snapshot.val();
        document.getElementById("myJoinedGroups").innerHTML = data;
    });

    
} 
*/

function deleteCreatedGroups()
{
    var database = firebase.database();
    var ref = database.ref("Groups/" + groupName);
    var myUserId = firebase.auth().currentUser.uid;
    
    ref.set(null);
    console.log("Group Deleted");
}
    


