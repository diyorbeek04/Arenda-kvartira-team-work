fetch(`http://localhost:8000/requests`)
.then( res => res.json())
.then(data => Madal(data))

let father = document.getElementById(`callback`)
let FragmentBlog = document.createDocumentFragment();
let Madal = (arr) => {
    arr?.map(elem => {
        let Clone = templateCallback.content.cloneNode(true)
        Clone.getElementById(`callbackId`).textContent = elem.id
        Clone.getElementById(`callbackP`).textContent = elem.ism
        Clone.getElementById(`callbackSpan`).textContent = elem.raqam
        Clone.getElementById('callbackDelete').addEventListener('click' , () => 
        {
            fetch(`http://localhost:8000/requests/${elem.id}`, {
                method : `DELETE`,
            })
            .then(res=> res.json())
            .then(data => data)
            window.location.reload();
        })
        FragmentBlog.appendChild(Clone)
        father.appendChild(FragmentBlog)
    })
}
Madal()
