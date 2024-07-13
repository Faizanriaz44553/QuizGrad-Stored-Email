let username = document.querySelector("#name");
let profilePicture = document.querySelector("#pic");
let signupdata = JSON.parse(localStorage.getItem("data"));

function nameuser() {
    const { user1, user2, user3, profile } = signupdata;
    username.innerHTML = `${user3}`;
    profilePicture.src = profile;
}
nameuser();

const logout = ()=> {
    localStorage.clear()
    window.location.href = "./signup.html"
}