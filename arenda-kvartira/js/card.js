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
let overlay = document.getElementById(`requestOverlay`)
let modal = document.getElementById(`requestModal`)
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

fetch('http://localhost:8000/flatBlog')
    .then(res => res.json())
    .then(data => data(data))

let dataSection = document.getElementById("cards")
let Fragment = document.createDocumentFragment()
let data = (arr) => {
    arr.map(elem => {
        let Clone = template.content.cloneNode(true)

        Clone.getElementById('images').src = elem.flatImage
        Clone.getElementById('card__item--h2').textContent = elem.flatTitle
        Clone.getElementById('card__item--p').textContent = elem.flatDescription
        Clone.getElementById('card__item--strong').textContent = elem.flatPrice
        Clone.getElementById('card__item--span').textContent = elem.flatLocation
        Clone.getElementById('card__item')
        Fragment.appendChild(Clone)
    })
    dataSection.appendChild(Fragment)
}




//let Title = document.getElementById("companent__h2")
//let Disc = document.getElementById("companent__p")
//let Price = document.getElementById("companent__mark")
