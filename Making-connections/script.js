console.log("random message")

var spanText = document.querySelector("span")

function nameChange(){
    spanText.innerText = "Hugh Mungus";
}


// this down is for the connection request

var todd = document.getElementById("todd");
var requests = document.getElementById("requests");

function check(){
    console.log(todd);
    console.log(requests);
    requests.removeChild(todd);
}


var phil = document.getElementById("phil");
var requests = document.getElementById("requests");

function check2(){
    console.log(phil);
    console.log(requests);
    requests.removeChild(phil);
}

var number = document.getElementById("number");

function change(){
    console.log(number);
    number.innerText--;
}

var total = document.getElementById("total")

function increase(){
    console.log(total);
    console.log(number);
    total.innerText++;
}