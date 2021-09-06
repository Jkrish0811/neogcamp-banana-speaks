var btnTranslet = document.querySelector("#btn-translet");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output")

console.log(outputDiv.innerHTML);

function clickHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);

}

btnTranslet.addEventListener("click",clickHandler)
