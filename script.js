let textIn = document.getElementById("textInput");
let button = document.getElementById("button");
let quoteArea = document.getElementById("quote-area")

document.addEventListener('click', (e)=> {
    e.preventDefault();
quoteArea.innerHTML = textIn.value;
    console.log(textIn.value)
})