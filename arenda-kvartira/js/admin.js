if (!window.localStorage.getItem('UserData')) {
    window.location.href = '../login.html'
}
fetch('http://localhost:8000/flatBlog')
.then(res => res.json())
.then(data => flatBlog(data))

let TextTitle = document.getElementById('parol')
let Name = document.getElementById('login')
let Photo = document.getElementById('photo')
let ModalActive = document.getElementById('modal')
let Overlay = document.getElementById('overlay')
let ButtonAdmin = document.getElementById('buttonAdmin')
let Burger = document.getElementById('burger')
let Left = document.getElementById('left')
let Icon = document.getElementById('icon')
let EditButton = document.getElementById('editCard')
let DeleteButton = document.getElementById('deleteCard')
let AddButton = document.getElementById('addCard')
let NoModal = document.getElementById('NoModal')
let ModalType = document.getElementById('ModalType')
let SubmitButton = document.getElementById('submitButton')
let SubmitButtonEdit = document.getElementById('submitButtonEdit')
let IdNumber = document.getElementById('id')
let Price = document.getElementById('price')
let LocationCard = document.getElementById('location')
let OverlayEdit = document.getElementById('overlayEdit')
let PhotoEdit = document.getElementById('photoEDit')
let NameEdit = document.getElementById('loginEdit')
let TextEdit = document.getElementById('parolEDit')
let ModalEdit = document.getElementById('modalEdit')


AddButton.addEventListener('click' , () =>{
    ModalActive.className = "modal"
    Overlay.className = "overlay"
    ModalType.textContent = "Add Card"
})
NoModal.addEventListener('click' , () =>{
    ModalActive.className = "no__modal"
    Overlay.className = "no__overlay"
})
Overlay.addEventListener('click' , () =>{
    ModalActive.className = "no__modal"
    Overlay.className = "no__overlay"
})

// NoModal.addEventListener('click' , () =>{
//     ModalActive.className = "no__modalEdit"
//     Overlay.className = "no__overlayEdit"
// })
// OverlayEdit.addEventListener('click' , () =>{
//     ModalActive.className = "no__modalEdit"
//     Overlay.className = "no__overlayEdit"
// })

// Edit admin panel

// SubmitButtonEdit.addEventListener('click' , (e) =>
// {
//     e.preventDefault()
//     let bodyEdit = {
//         flatImage: PhotoEdit.value,
//         flatTitle: NameEdit.value,
//         flatDescription: TextEdit.value,
//         flatPrice: Price.value,
//         flatLocation: LocationCard.value
//     }
// fetch('http://localhost:8000/flatBlog' , {
//     method: "UPDATE",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     bodyEdit: JSON.stringify(bodyEdit)
// })
//     .then(res => res.json())
//     .then(data => data)
//     window.location.reload();
// })


// SubmitButtonEdit.addEventListener('click' , (e) =>{
//     e.preventDefault();
//     let bodyEdit = {
//         flatImage: Photo.value,
//         flatTitle: Name.value,
//         flatDescription: TextTitle.value,
//         flatPrice: Price.value,
//         flatLocation: LocationCard.value
//     }
//     // console.log(bodyEdit);
//         fetch('http://localhost:8000/flatBlog' , {
//         method: "UPDATE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body)
//     })
//         .then(res => res.json())
//         .then(data => data)
//         window.location.reload();
// })

AddButton.addEventListener('click' , () =>{
    ModalActive.className = "modal"
    Overlay.className = "overlay"
    ModalType.textContent = "Add Card"
})
 

SubmitButton.addEventListener('click' , (e) =>
{
    e.preventDefault()
    let body ={
        // id: IdNumber.value ,
        flatImage: Photo.value,
        flatTitle: Name.value,
        flatDescription: TextTitle.value,
        flatPrice: Price.value,
        flatLocation: LocationCard.value
    }
fetch('http://localhost:8000/flatBlog' , {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
})
    .then(res => res.json())
    .then(data => data)
    window.location.reload();
})

let ChatSection = document.getElementById("Menu")
let Fragment = document.createDocumentFragment()
let flatBlog =(arr) => {
    console.log(arr);
    arr?.map(elem => {
           let Clone = templateMenu.content.cloneNode(true)
    Clone.getElementById('id').textContent = elem.id
    Clone.getElementById('name').textContent = elem.flatTitle
    Clone.getElementById('card')

    Clone.getElementById('deleteCard').addEventListener('click' , () => 
    {
        fetch(`http://localhost:8000/flatBlog/${elem.id}`, {
            method : 'DELETE',
        })
        .then(res=> res.json())
        .then(data => data)
      
        setTimeout(() => {
            window.location.reload()
        }, 2);
    })
    Fragment.appendChild(Clone)

    })
    ChatSection.appendChild(Fragment)
}

flatBlog()
