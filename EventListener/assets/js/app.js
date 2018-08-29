//variables


//Event listeners
EventListener();
function EventListener() {
    document.getElementById('formulario').addEventListener('submit', agregarTweet)
}


//funciones
function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);
}