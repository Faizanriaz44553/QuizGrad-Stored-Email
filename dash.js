let username = document.querySelector("#name");
let profilePicture = document.querySelector("#pic");
let signupdata = JSON.parse(localStorage.getItem("data"));

function nameuser() {
    let signupdata = JSON.parse(localStorage.getItem("data"));
    let currentUser = signupdata.find(user => user.islogin === true);
    
    if (currentUser) {
        username.innerHTML = `${currentUser.user3}`;
        profilePicture.src = currentUser.user4;
    }
}
nameuser();


const logout = () => {
    let signupdata = JSON.parse(localStorage.getItem("data"));
    let currentUser = signupdata.find(user => user.islogin === true);

    if (currentUser) {
        signupdata = signupdata.map(user => 
            user.user1 === currentUser.user1 ? { ...user, islogin: false } : user
        );
        localStorage.setItem("data", JSON.stringify(signupdata));
    }

    window.location.href = "./signup.html";
};
