// Functions Bolum Sonu Egzersizi

let counter = 0
let counterDOM = document.querySelector("#counter") // number
let increaseDOM = document.querySelector("#increase") // button
let decreaseDOM = document.querySelector("#decrease") // button

counterDOM.innerHTML = counter // ekrana 0 yazdık

increaseDOM.addEventListener("click", clickEvent) // Arttir butonuna tiklandiginda
decreaseDOM.addEventListener("click", clickEvent) // Eksilt butonuna tikladiginda

function clickEvent() {
    this.id == "increase" ? counter += 1 : counter -= 1 // eger id increase esit ise arttir degilse eksilt dedik
    counterDOM.innerHTML = counter // burada da yazdirdik
}