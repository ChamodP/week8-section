let teamScore1= 0;
let teamScore2 = 0;

document.querySelector('#button1').onclick = function(){
    teamScore1 = teamScore1 + 1;
    document.querySelector('#score1').innerHTML = teamScore1;
}

document.querySelector('#button2').onclick = function(){
    teamScore2 = teamScore2 + 1;
    document.querySelector('#score2').innerHTML = teamScore2;
}

document.querySelector('#reset-button').onclick = function(){
    teamScore1 = 0;
    teamScore2 = 0;
    document.querySelector('#score1').innerHTML = teamScore1;
    document.querySelector('#score2').innerHTML = teamScore2;
}