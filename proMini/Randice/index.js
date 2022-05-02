// alert("yes")
var ranNumber1 = Math.floor(Math.random()*6)+1; //generated random number
var ranDiceNumber = "dice" + ranNumber1 + ".png"; //joined it ith dice number 
var ranImgSource = "images/" + ranDiceNumber; //collevting that imag with that random number 

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , ranImgSource);

var ranNumber2 = Math.floor(Math.random()*6)+1;
var ranDiceNumber2 = "dice"+ ranNumber2 + ".png";
var ranImgSource2 = "images/" + ranDiceNumber2;

var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",ranImgSource2);


if(ranNumber1>ranNumber2){
    document.querySelector("h1").innerHTML ="player 1 won!";
} 
else if(ranNumber1< ranNumber2){
    document.querySelector("h1").innerHTML="player 2 won!";
}
else {
    document.querySelector("h1").innerHTML="draw";
}