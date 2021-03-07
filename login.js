const loginForm = document.querySelector('#login');
loginForm.addEventListener('click', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-psw'].value;
  console.log(email, password)

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    console.log("logged in")
    window.location.href = "index.html";  
  });
});