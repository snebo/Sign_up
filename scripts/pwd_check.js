const user_password = document.querySelector("#pwd")
const user__confirm = document.querySelector("#verify_pwd")
const err_msg = document.querySelector(".error_msg")
const btn = document.querySelector(".send")

function validate(){
  // handle error sign
  // disable button
  if (user_password.value != user__confirm.value){
    user__confirm.classList.add("error")
    err_msg.innerHTML = "*passwords do not match"
    btn.disabled  = true
  }
  else{
    user__confirm.classList.remove("error")
    err_msg.innerHTML = ''
    btn.disabled= false
  }


}

// check typing
user__confirm.addEventListener("input", validate)
user_password.addEventListener("input", validate)