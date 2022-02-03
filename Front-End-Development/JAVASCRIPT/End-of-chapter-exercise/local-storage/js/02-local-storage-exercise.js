// LocalStorage Bolum Sonu Egzersizi

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector("#counter") // number
let increaseDOM = document.querySelector("#increase") // buttons
let decreaseDOM = document.querySelector("#decrease") // 

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent) // Tiklandiginda 
decreaseDOM.addEventListener("click", clickEvent)


function clickEvent() {
    console.log(this.id);
    this.id == "increase" ? counter += 1 : counter -= 1

    localStorage.setItem('counter', counter)

    counterDOM.innerHTML = counter
}