import axios from "axios"; // axios kütüphanesini import ettik.

async function getData(Number) {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + Number)
    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + Number)

    console.log("Users", user, "Post", post); // users ve post bilgilerini yazdırdık.
}

export default getData; // fonksiyonu default olarak export ettik.