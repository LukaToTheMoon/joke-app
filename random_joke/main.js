const button = document.getElementById('btn');
const setup = document.querySelector('.p');
const delivery = document.querySelector('.p2');
const wrapper = document.querySelector('.wrapper');
const url = "https://v2.jokeapi.dev/joke/Any";

async function getJoke(){
    const response = await fetch(url);
    const joke = await response.json();

    wrapper.classList.add("active")

    console.log(joke);
    if(joke.setup && joke.delivery){
        setup.textContent = joke.setup;
        delivery.textContent = joke.delivery;
    } else{
        setup.textContent = joke.joke;
        delivery.textContent = "";
    }
    
}

button.addEventListener('click', getJoke);
