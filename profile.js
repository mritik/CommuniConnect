function checkUserBio()
{
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(flag)
        document.getElementById("userBioError").style.display = "block";
    else
        document.getElementById("userBioError").style.display = "none";
}

function saveProfile()
{
    let userFirstName = document.getElementById("userFirstName").value 
    let userSurname = document.getElementById("userSurname").value 
    let userCountry = document.getElementById("userCountry").value 
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
            userBio: userBio
        }
        firebaseRef.child(localStorage.userID).set(userData);
        console.log("Profile Updated");
        window.location="index.html";
    }
}

