// const jokeText = document.querySelector('.card-text');
const jokeImage = document.querySelector('.card img');
const jokeTitle = document.querySelector('.card-title');
const newJokeBtn = document.getElementById('new-joke');

let apiJoke = {};

function showNewJoke() {
    // jokeText.textContent = apiJoke.value;
    jokeImage.src = apiJoke.icon_url;
    jokeTitle.textContent = apiJoke.value;
}

// Get Joke from API
async function getJokesFromApi() {

    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
              }
          });
        apiJoke = await response.json();
        showNewJoke();
    } catch (error) {
        console.log(error);
    }
}

// Adding Event Listeners to buttons to generate a new quote or tweet it
newJokeBtn.addEventListener('click', getJokesFromApi)

// On load
getJokesFromApi();