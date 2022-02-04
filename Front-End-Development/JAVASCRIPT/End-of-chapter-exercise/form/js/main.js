// FORMLARLA CALISMAK : Bolum Sonu Egzersizi

/*

1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar

*/

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formHandler) // Gönder butonuna Tikladiginda calisacak olan fonksiyon
let alertDOM = document.querySelector("#alert")


const alertFunction = (title, message, className = "danger") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`


function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, score.value) // eger username ve not bilgisi girildiyse ekle dedik
        USER_NAME.value = "" // bilgileri gönderdikten dedikten sonra sifirladik
        SCORE.value = ""
        alertDOM.innerHTML = alertFunction(
            "Basarili",
            "Bilgiler Kaydedildi",
            "success"
        )
    } else {
        alertDOM.innerHTML = alertFunction(
            "Uyari",
            "Eksik Bilgi Girdiniz",
            "danger"
        ) // username ve not bilgisi girilmez ise hata vericek olan kisim
    }
}


let userListDOM = document.querySelector("#userList") // ul id sectik
const addItem = (userName, score) => {
    let liDOM = document.createElement("li") // yeni bir li olusturduk
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `

    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.prepend(liDOM) // li elemanina ekle dedik
}
