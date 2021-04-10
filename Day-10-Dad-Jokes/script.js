const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers : {
            "accept" : "application/json"
        }
    };

    const fetchRes = await fetch("https://icanhazdadjoke.com", config);
    const data = await fetchRes.json();
    jokeElement.innerHTML = data.joke;
}