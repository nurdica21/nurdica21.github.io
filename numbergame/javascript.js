var scores, roundscore, activplayer

scores=[0,0];
roundscore=0;
activplayer=0;

function roll(){
    dice = Math.floor(Math.random()*6)+1;
    roundscore+=dice;
    if(dice===1){
        roundscore=0;
    }
    document.querySelector('#current-' + activplayer).textContent = roundscore;
    document.querySelector('#dice').textContent = dice;
    console.log(dice);
    
    if(dice===1){
        roundscore=0;
        hold()
    }
}
function hold(){

    if(scores[0]>=100){
        document.querySelector('#name-'+0).textContent="player 1 is winner";
        console.log("player 1 is winner");
    }
    
    else if(scores[1]>=100){ 
        document.querySelector('#name-'+1).textContent="player 2 is winner";
        console.log("player 2 is winner");

    }

    else{ 
        if(activplayer===0){
            
            scores[0]+=roundscore;
            document.querySelector('#score-' + activplayer).textContent = scores[0];
            activplayer=1;
            roundscore=0;
            console.log(scores[0]);
        }
        else{
           
            scores[1]+=roundscore;
            document.querySelector('#score-' + activplayer).textContent = scores[1];
            activplayer=0;
            roundscore=0;
            console.log(scores[1]);
        }
    
    }
    
}

function newgame(){
    dice=0;
    scores[0]=0;
    scores[1]=0;
    roundscore=0;
    activplayer=0;
    document.querySelector('#name-'+1).textContent="Player 2";
    document.querySelector('#name-'+0).textContent="Player 1";
    document.querySelector('#score-' + 0).textContent = scores[0];
    document.querySelector('#score-' + 1).textContent = scores[1];
    document.querySelector('#current-' + 0).textContent = roundscore;
    document.querySelector('#current-' + 1).textContent = roundscore;
    document.querySelector('#dice').textContent = scores[0];
    

}

var score = document.querySelector('#score-' + activplayer).textContent;
console.log(score);

document.querySelector('.btn-roll').addEventListener('click',roll);
document.querySelector('.btn-hold').addEventListener('click',hold);
document.querySelector('.btn-new-game').addEventListener('click',newgame);