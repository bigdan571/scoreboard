let num_hoMe = 24
let num_aWay = 55

let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

homeEl.textContent = num_hoMe
awayEl.textContent = num_aWay

function htwo(){
    num_hoMe += 2
    homeEl.textContent = num_hoMe
}

function hfour(){
    num_hoMe +=4 
    homeEl.textContent = num_hoMe
}

function hsix(){
    num_hoMe +=6 
    homeEl.textContent = num_hoMe
}

// AWAY 

function atwo(){
    num_aWay +=2
    awayEl.textContent = num_aWay
}

function afour(){
    num_aWay +=4 
    awayEl.textContent = num_aWay
}

function asix(){
    num_aWay +=6 
    awayEl.textContent = num_aWay
}