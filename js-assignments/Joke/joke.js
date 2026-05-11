
const joke=document.getElementById("joke")

function nextJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response=>response.json())
    .then(data=>joke.textContent=data.setup)
}

nextJoke()
/* 
    Mistakes :
    1.document not mentioned
*/