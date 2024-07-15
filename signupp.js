let usera = document.querySelector('#user1') 
let userb = document.querySelector('#user2')
let userc =document.querySelector("#user3")
let profile =document.querySelector("#pic")
let AllUserData = JSON.parse(localStorage.getItem('data')) || [];


function validationForm() {
    event.preventDefault() 
  let error = document.querySelector('#validation-2') 
  let CapitalLetter = false 
  let SmallLetter = false 
  let hasNumber = false; 
  let hasSpecialChar = false; 
  let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'];
  if (usera.value.trim() === "") { 
    console.log("input Empity"); 
    error.innerHTML = ("Email is Empity"); 
    error.className = "error"; } 
    
    else if (userb.value.trim() === "") { 
      error.innerHTML = "Password is Empity" } 
     
    else if (usera.value.length < 13) { 
      error.innerHTML = "Please enter your correct Email" } 
      else { if (userb.value.length > 8) { 
        for (let i = 0; i < userb.value.length; i++) {
          if (userb.value[i] >= "A" && userb.value[i] <= "Z") { 
            CapitalLetter = true }; 
            if (userb.value[i] >= "a" && userb.value[i] <= "z") { 
            SmallLetter = true 
            }; 
            if (userb.value[i] >= "0" && userb.value[i] <= "9") {
            hasNumber = true; 
            } 
            if (specialChars.includes(userb.value[i])) {
            hasSpecialChar = true; 
            } 
        }
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
                        let alreadyAccout = AllUserData.find((item)=>{
                          return item.user1 === usera.value;
                        })
                        console.log(alreadyAccout)
                        if (alreadyAccout) {
                          setTimeout(function () {
                            window.location.href = "./dash.html";
                        }, 1500);
                        }
                        else{
                          if (profile.files.length > 0) {
                            let image = profile.files[0];
                            let fileread = new FileReader();
                            fileread.onload = () => {
                                obj.profile = fileread.result;
                            }
                            fileread.readAsDataURL(image);
                          }
                          let obj = {
                            user1: usera.value,
                            user2: userb.value,
                            user3: userc.value,
                            user4: profile.value,
                          }
                          AllUserData.push(obj)
                          localStorage.setItem('data', JSON.stringify(AllUserData));
                          console.log("Correct Password");
                          Swal.fire({
                              position: "top-center",
                              icon: "success",
                              title: "Signup Successful",
                              showConfirmButton: false,
                              timer: 1500
                          });
                          setTimeout(function() {
                              window.location.href = "./login.html";
                          }, 1000);
                        }
                    }
    }
    else {
        console.log("Password atleast 8 charector valid");
        error.innerHTML = ("Password atleast 8 charector valid");
        error.className = "error";
    }
}
}
