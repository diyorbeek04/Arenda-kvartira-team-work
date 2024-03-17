
let ism = document.getElementById(`name`)
let email = document.getElementById(`email`)
let comment = document.getElementById("commet")
let knopka = document.getElementById(`buttonadd`)


knopka.addEventListener(`click`  , (e) => 
{
    e.preventDefault()
    let body = {
        ism : ism.value,
        email : email.value,
        sharx : comment.value
    }
    fetch(`http://localhost:8000/from`, {
        method : `POST`,
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
    })
    .then(res=> res.json())
    .then(data => data)
    window.location.reload();
}
)

 