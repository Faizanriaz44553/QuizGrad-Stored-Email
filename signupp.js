let usera = document.querySelector('#user1') 
let userb = document.querySelector('#user2')
let userc =document.querySelector("#user3")



function validationForm() {
    event.preventDefault() 
  let obj = {
    user1: usera.value,
    user2: userb.value,
    user3: userc.value,
  }
  const {user1 , user2 , user3} = obj;
  let error = document.querySelector('#validation-2') 
  let CapitalLetter = false 
  let SmallLetter = false 
  let hasNumber = false; 
  let hasSpecialChar = false; 
  let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'];
  if (user1.trim() === "") { 
    console.log("input Empity"); 
    error.innerHTML = ("Email is Empity"); 
    error.className = "error"; } 
    
    else if (user2.trim() === "") { 
      error.innerHTML = "Password is Empity" } 
     
    else if (user1.length < 13) { 
      error.innerHTML = "Please enter your correct Emai" } 
      else { if (user2.length > 8) { 
        for (let i = 0; i < user2.length; i++) {
          if (user2[i] >= "A" && user2[i] <= "Z") { 
            CapitalLetter = true }; 
            if (user2[i] >= "a" && user2[i] <= "z") { SmallLetter = true }; 
            if (user2[i] >= "0" && user2[i] <= "9") { hasNumber = true; } 
            if (specialChars.includes(user2[i])) { hasSpecialChar = true; } }
            if (CapitalLetter !== true) {
            console.log("Enter a password with at least one capital letter");
            error.innerHTML =("Enter a password with at least one capital letter");
            error.className = "error";
        }
        if (SmallLetter !== true ) {
            console.log("Enter a password with at least one small letter");
            error.innerHTML = ("Enter a password with at least one small letter");
            error.className = "error";
        }
        if (hasNumber !== true) {
            console.log("Enter a password with at least one number.");
            error.innerHTML = ("Enter a password with at least one number.");
            error.className = "error";
        }
        if (hasSpecialChar !== true) {
            console.log("Enter a password with at least one special charector.");
            error.innerHTML = ("Enter a password with at least one special charector.");
            error.className = "error";
        }
        if (CapitalLetter && SmallLetter && hasNumber && hasSpecialChar) {
          localStorage.setItem('data', JSON.stringify(obj));
            console.log("Correct Password");
            Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login",
            showConfirmButton: false,
            timer: 1500
            });
           setTimeout(function() {
                window.location.href = "./login.html";
            } , 1000);
        }
    }
    else {
        console.log("Password atleast 8 charector valid");
        error.innerHTML = ("Password atleast 8 charector valid");
        error.className = "error";
    }
}
}

function secondLogin() { 
  let data = JSON.parse(localStorage.getItem('data'))
  if (data.user1 === usermail.value && data.user2 === userpass.value) {
    Swal.fire({ 
      position: "top-center", 
      icon: "success", 
      title: "Succesfully Signup", 
      showConfirmButton: false, 
      timer: 1500 }); 
      setTimeout(function() { 
        window.location.href = "./last.html"; } , 1000);
  } 
  else {
    alert('please enter correct email and password')
  }
  
}