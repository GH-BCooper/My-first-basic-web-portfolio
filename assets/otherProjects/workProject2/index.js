var randomNumber1 = Math.floor(6* Math.random()) + 1 ;

var randomNumber1OfDie = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomNumber1OfDie);

var randomNumber2 = Math.floor(6* Math.random()) + 1 ;

var randomNumber2OfDie = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomNumber2OfDie);

if(randomNumber1===randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}