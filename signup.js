const signupForm = document.querySelector('#signup');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-psw'].value;
  const uname = signupForm['signup-uname'].value
  // sign up the user

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    document.getElementById('signup-alert').innerHTML = "Your account information has been saved, proceed to login.";
    console.log("signed in")

    window.location.href = "index.html";
  });
});