var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var dice1 = document.getElementsByClassName('img1')[0];
var dice2 = document.getElementsByClassName('img2')[0];

dice1.src="./images/dice"+randomNumber1+".png";
dice2.src="./images/dice"+randomNumber2+".png";

if(randomNumber1==randomNumber2){
    setTie();
}

if(randomNumber1>randomNumber2){
    setWinner(1)
}

if(randomNumber1<randomNumber2){
    setWinner(2)
}

function setWinner(player){
    var title = document.querySelector('h1');
    title.textContent = 'Player ' + player + ' wins!';
}   

function setTie(){
    var title = document.querySelector('h1');
    title.textContent = 'Drawww'
}