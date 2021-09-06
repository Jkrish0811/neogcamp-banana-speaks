var btnTranslet = document.querySelector("#btn-translet");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output")


function clickHandler() {
    outputDiv.innerHTML = "jhgdsjbhjchdcj" + txtInput.value;

}

btnTranslet.addEventListener("click",clickHandler)
