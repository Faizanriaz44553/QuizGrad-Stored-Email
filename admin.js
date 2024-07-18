let container = document.querySelector("#container")

const showDataUser = ()=>{
    let datauser = JSON.parse(localStorage.getItem("data"))
    datauser.forEach((values)=>{
        container.innerHTML += `<li class="list-group-item"><h4 class="card-text">Username : ${values.user3}</h4><h4 class="card-text">Email : ${values.user1}</h4> <h4 class="card-text">Password : ${values.user2}</h4> </br><div class="d-grid gap-2 d-md-block">
          <button class="btn btn-success" type="button">Review</button>
          <button class="btn btn-primary" type="button">Edit</button>
  <button class="btn btn-danger" type="button">Delete</button>
</div></li>`
    })
}
showDataUser()
