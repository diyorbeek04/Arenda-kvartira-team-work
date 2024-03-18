let emailLogIn = document.getElementById("emailLogIn")
let passwordLogIn = document.getElementById("passwordLogIn")
let EnterAdmin = document.getElementById("EnterAdmin")
let error = document.getElementById("error")
EnterAdmin.addEventListener('click' , (e) => {
    e.preventDefault()
    if (emailLogIn.value == 'admin@gmail.com' && passwordLogIn.value == 'teamwork') {
        window.location.href = '../admin.html'
    }else{
        error.style.display = 'block'
    }
})