let usera = document.querySelector('#user1') 
let userb = document.querySelector('#user2')
let userc =document.querySelector("#user3")
let profile =document.querySelector("#pic")



function validationForm() {
    event.preventDefault() 
  let obj = {
    user1: usera.value,
    user2: userb.value,
    user3: userc.value,
    user4: profile.value,
  }
  const {user1 , user2 , user3 ,} = obj;
  console.log(profile);
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
            if (user2[i] >= "a" && user2[i] <= "z") { 
            SmallLetter = true 
            }; 
            if (user2[i] >= "0" && user2[i] <= "9") {
            hasNumber = true; 
            } 
            if (specialChars.includes(user2[i])) {
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
          // localStorage.setItem('data', JSON.stringify(obj));
          //   console.log("Correct Password");
          //   Swal.fire({
          //   position: "top-center",
          //   icon: "success",
          //   title: "Login",
          //   showConfirmButton: false,
          //   timer: 1500
          //   });
          //  setTimeout(function() {
          //       window.location.href = "./login.html";
          //   } , 1000);
           if (profile.files.length > 0) {
                    let image = profile.files[0];
                    let fileread = new FileReader();
                    fileread.onload = () => {
                        obj.profile = fileread.result;
                        localStorage.setItem('data', JSON.stringify(obj));
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
                    fileread.readAsDataURL(image);
        }
    }
    else {
        console.log("Password atleast 8 charector valid");
        error.innerHTML = ("Password atleast 8 charector valid");
        error.className = "error";
    }
}
}
}
// const uploadimg = ()=>{
//   let img = profile.files[0];
//   let fileread = new FileReader();
//   fileread.onload = ()=>{
//     let imageobj = {
//       profile : fileread.result
//     }
//     localStorage.set("imgData" , JSON.stringify(imageobj))
//   }
//   fileread.readAsDataURL(img)
// }