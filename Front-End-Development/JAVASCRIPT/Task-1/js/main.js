let userName = prompt("Adinizi giriniz");
let info = document.querySelector("#name");

info.innerHTML = `Merhaba ${userName}! Hoşgeldin`

function clock() {

    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    m = checkTime(m);
    s = checkTime(s);

    if ( d == 1) {
        d = "Pazartesi";
    } else if ( d == 2) {
        d = "Salı";
    } else if ( d == 3) {
        d = "Çarşamba";
    } else if ( d == 4) {
        d = "Perşembe";
    } else if ( d == 5) {
        d = "Cuma";
    } else if ( d == 6) {
        d = "Cumartesi";
    } else if ( d == 0) {
        d = "Pazar";
    }

    document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s + " "+ d;
    setTimeout(clock, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}