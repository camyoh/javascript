//variables
const listaTweets = document.getElementById('lista-tweets');

//Event listeners
EventListener();

function EventListener() {
    document.getElementById('formulario').addEventListener('submit', AgregarTweet);
    listaTweets.addEventListener('click', BorrarTweet);

    document.addEventListener('DOMContentLoaded',localStorageListo);
}

//funciones
function AgregarTweet(e) {
    e.preventDefault();
    const tweet2 = document.getElementById('tweet');
    //const tweet = document.getElementById('tweet').value;
    const tweet = tweet2.value;
    console.log(tweet);
    const li = document.createElement('li');
    li.innerText = tweet;
    listaTweets.appendChild(li);

    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    li.appendChild(botonBorrar);
    tweet2.value = '';
    agregarTweetLocalStorage(tweet);
}

function BorrarTweet(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-tweet')) {
        console.log('Aplicó bien el click');
        console.log(e.target);
        e.target.parentElement.remove();
        //e.target.remove();
    } else {
        console.log('Aplicó mal el click');
    }
}

function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = ObtenerTweetsLocalStorage();
    //localStorage.setItem('tweets', tweet);
    tweets.push(tweet);
    //json a string
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function ObtenerTweetsLocalStorage() {
    let tweets;
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        //convertir a json
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function localStorageListo() {
    let tweets;
    tweets = ObtenerTweetsLocalStorage();
    tweets.forEach(function (tweet) {
        
        const li = document.createElement('li');
        li.innerText = tweet;
        listaTweets.appendChild(li);

        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        li.appendChild(botonBorrar);
    });
}