let username = document.querySelector("#name")
function nameuser() {
    let signupdata = JSON.parse(localStorage.getItem("data"));

    username.innerHTML = `${signupdata.user3}`
    
}
nameuser()