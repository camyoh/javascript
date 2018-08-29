//variables
    const listaTweets = document.getElementById('lista-tweets');

//Event listeners
EventListener();
function EventListener() {
    document.getElementById('formulario').addEventListener('submit', AgregarTweet)
}


//funciones
function AgregarTweet(e) {
    e.preventDefault();
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);
    const li = document.createElement('li');
    li.innerText = tweet;
    listaTweets.appendChild(li);

    const botonBorrar = document.createElement('a');
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText='X';
    li.appendChild(botonBorrar);
}

function BorrarTweet(){

}
