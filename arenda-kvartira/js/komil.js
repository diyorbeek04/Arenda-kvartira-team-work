let ism = document.getElementById(`ism`)
let raqam = document.getElementById(`raqam`)
let knopka = document.getElementById(`requestModalButton`)


knopka.addEventListener(`click`  , (e) => 
{
    e.preventDefault()
    let body = {
        ism : ism.value,
        raqam : raqam.value
    }
    fetch(`http://localhost:8000/requests`, {
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
let kirish = document.getElementById(`orderCall`)
let overlay = document.getElementById(`overlay`)
let modal = document.getElementById(`modal`)
let chiqish = document.getElementById(`requestModalExit`)
// order.addEventListener(`click` , (e) => 
// {
//     overlay.className = `overlay`
//     modal.className = `modal`
// })
// tushundim.addEventListener(`click` , (e) => 
// {
//     overlay.className = `no__active--overlay`
//     modal.className = `no__active--modal`
// })
function enterToModal() {
    overlay.className = `overlay`
    modal.className = `modal`
}
function exitFromModal() {
    overlay.className = `no__active--overlay`
    modal.className = `no__active--modal`
}
chiqish.addEventListener('click' , exitFromModal)
kirish.addEventListener('click' , enterToModal)
