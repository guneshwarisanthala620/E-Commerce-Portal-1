function validateRegister() {
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  if (password !== confirm) {
    alert("Passwords do not match!");
    return false;
  }
  alert("Registration Successful!");
  return true;
}

function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  if (email === "" || password === "") {
    alert("Please fill all fields");
    return false;
  }
  alert("Login Successful!");
  return true;
}