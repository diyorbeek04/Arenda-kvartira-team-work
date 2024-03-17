fetch(`http://localhost:8000/flatBlog/${window.localStorage.getItem('flatId')}`)
    .then(res => res.json())
    .then(data => Data(data))
let dataSection = document.getElementById("cards")
let Fragment = document.createDocumentFragment()
let Data = (arr) => {
    console.log(arr);
        let Clone = templateFlat.content.cloneNode(true)
        Clone.getElementById('card__item--images').src = arr.flatImage
        Clone.getElementById('card__item--h2').textContent = arr.flatTitle
        Clone.getElementById('card__item--p').textContent = arr.flatDescription
        Clone.getElementById('card__item--small').textContent = arr.flatPrice
        Clone.getElementById('card__item--img').src = arr.flatLocationImage
        Clone.getElementById('card__item--span').textContent = arr.flatLocation
        Fragment.appendChild(Clone)
    dataSection.appendChild(Fragment)
}
