var btnTranslet = document.querySelector("#btn-translet");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverUrl ="https://api.funtranslations.com/translate/dothraki.json"

function getTransletUrl(text) {
    return serverUrl +"?"+"text="+ text
};


function clickHandler() {
   // outputDiv.innerHTML = "jhgdsjbhjchdcj" + txtInput.value; 
   var inputText = txtInput.value; 
    //textinput
    //calling server for processing
   fetch(getTransletUrl(inputText))
   .then(response => response.json())
   .then(json=>console.log(json.contents.translated))

};

btnTranslet.addEventListener("click",clickHandler)
