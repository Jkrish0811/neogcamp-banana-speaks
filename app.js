var btnTranslet = document.querySelector("#btn-translet");

var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);

}

btnTranslet.addEventListener("click",clickHandler)

