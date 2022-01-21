// butona tıklandı ve aşağıda ki fonksiyon çalıştı
function login() {

    // kullanıcıdan username ve password girmesini söyledik
    let userInput = prompt('Username:')
    let passwordInput = prompt('Password:')

    // burada koşul sağlandığında giriş başarılı
    if (userInput === "Guest" && passwordInput === "guest3322") {
        alert('Login Successfully')

        //burada id login seçtik yani h1
        let loginNotification = document.getElementById('login')
        loginNotification.innerHTML = `Welcome ${userInput}` // burada h1 yazısını değiştirdik ve Welcome Guest yazdık


        
    // eger yanlış girildiyse alert Login Failed yazacak
    } else {
        alert('Login Failed')
    }
}