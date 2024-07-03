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
    console.log(signupdata);

    // Get error display element
    let error = document.querySelector('#validation-2');


            if (usera === signupdata.user1) {
                if (userb === signupdata.user2) {
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
                    console.log("Incorrect password");
                error.innerHTML = "Incorrect password";
                error.className = "error";
                }
            } else {
                console.log("Incorrect email");
                error.innerHTML = "Incorrect email";
                error.className = "error";
            }
};

