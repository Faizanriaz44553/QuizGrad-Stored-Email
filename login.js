// Select the input elements
let user1 = document.querySelector("#user1");
let user2 = document.querySelector("#user2");

// Function to handle login
const login = (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input values
    let usera = user1.value;
    let userb = user2.value;

    // Get values from localStorage
    let signupdata = JSON.parse(localStorage.getItem("data"));
     

    // Get error display element
    let error = document.querySelector('#validation-2');
    
    
    let compareEmail = signupdata.find((item)=>{
        return item.user1  === usera;
    })       
    let comparePassword = signupdata.find((item)=>{
        return item.user2 === userb;
    })   
    if (usera === "sylanipractice@gmail.com" && userb === "faizan") {
        setTimeout(function () {
            window.location.href = "./admin.html";
        }, 1500);
    }    
    else if (compareEmail) {
       if (comparePassword) {
        signupdata = signupdata.map(item => 
            item.user1 === usera ? { ...item, islogin: true } : item
        );
        localStorage.setItem('data', JSON.stringify(signupdata));
        console.log("Correct Password");
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Succesfully Login",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(function () {
            window.location.href = "./dash.html";
        }, 1500);
       } else {
        console.log("Incorrect email");
        error.innerHTML = "Incorrect Password";
        error.className = "error";
       }
    } else {
        console.log("Incorrect email");
        error.innerHTML = "Incorrect email";
        error.className = "error";
    }
};

