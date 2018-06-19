/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click',function(){
    var diceRandom = Math.floor((Math.random()*6)+1);
    var dice = document.querySelector('.dice');
    dice.style.display = 'block';
    dice.src = "dice-"+ diceRandom +".png";

    //if not 1, then increment roundscore. If 1 switch to other player
    if(diceRandom !== 1){
        //Add to roundscore
        roundScore += diceRandom;
        document.getElementById('current-'+ activePlayer).textContent = roundScore;
    }else{
        //switch to other player
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add CURRENT SCORE to GLOBAL SCORE
    scores[activePlayer] += roundScore;
    roundScore = 0;
    //Update the UI
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];


    //Check if player won the game 
    if (scores[activePlayer] >= 100){
        var otherPlayer;
        document.getElementById('score-'+activePlayer).textContent = 'WINNER';
        activePlayer === 0 ? otherPlayer = 1: otherPlayer = 0;
        document.getElementById('score-'+otherPlayer).textContent = 'LOSER';
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
    }
    //Reset
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
});

document.querySelector('.btn-new').addEventListener('click', function(){
    scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
});