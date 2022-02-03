// LocalStorage Bolum Sonu Egzersizi

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector("#counter") // Number
let increaseDOM = document.querySelector("#increase") // Buttons
let decreaseDOM = document.querySelector("#decrease") 

counterDOM.innerHTML = counter // varsayilan sayi 0 olarak ekranda gözükücek

increaseDOM.addEventListener("click", clickEvent) // Tiklandiginda 
decreaseDOM.addEventListener("click", clickEvent)


function clickEvent() {
    console.log(this.id);
    this.id == "increase" ? counter += 1 : counter -= 1 // eger buton "increase" esitse yani bastiysa arttir degilse eksilt buda Eksilt Butonu oluyor

    localStorage.setItem('counter', counter) // counter adinda Local Storage olusturduk ve icerisine counter bilgisini atadik

    counterDOM.innerHTML = counter // her bastiginda ekrana sayiyi yazdirir.
}
