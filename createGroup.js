const groupSignUpForm = document.getElementById('groupSignUpDiv');
groupSignUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const groupName = groupSignUpForm['groupName'].value;
  const groupDescription = groupSignUpForm['groupDescription'].value;
  const memberCap = groupSignUpForm['memberCap'].value
  // sign up the user

  auth.createNewGroupWithInfo(groupName, groupDescription, memberCap).then(cred => {
    console.log(cred.group);
    console.log("Group Created")

    window.location.href = "index.html";
  });
});