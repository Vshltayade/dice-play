const new_game = document.getElementById('new_game');
const roll_dice = document.getElementById('roll_dice');
const hold = document.getElementById('hold');
const die = document.getElementById('die');
const playdie = document.querySelector('#die img');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player1_total_score = document.getElementById('player1_total_score');
const player1_current_score = document.getElementById('player1_current_score');
const player2_total_score = document.getElementById('player2_total_score');
const player2_current_score = document.getElementById('player2_current_score');
const div_current_score1 = document.querySelector('#player1 div');
const div_current_score2 = document.querySelector('#player2 div');

let player1TotalScore = +player1_total_score.innerHTML;
let player1CurrentScore = +player1_current_score.innerHTML;
let player2TotalScore = +player2_total_score.innerHTML;
let player2CurrentScore = +player2_current_score.innerHTML;

let turn = true;

player2.style.backgroundColor = 'rgb(0, 0, 0, .7)';
div_current_score2.style.backgroundColor = 'rgb(198, 30, 97, 0)';

let imgs = [
    '../Assets/1.jpg',
    '../Assets/2.jpg',
    '../Assets/3.jpg',
    '../Assets/4.jpg',
    '../Assets/5.jpg',
    '../Assets/6.jpg',
];
    

roll_dice.addEventListener('click', () => {

    let rndNum = Math.floor(Math.random() * 6 + 1);

    die.style.display = 'block';
    playdie.setAttribute('src',`${imgs[rndNum-1]}`);
    playdie.style.transition = 'ease-in';
    
    if(turn){

        if(rndNum === 1)  player2Styles();
        else {
            player1CurrentScore += rndNum;
            player1_current_score.innerHTML = player1CurrentScore;
        }

    } else {
        if(rndNum === 1) player1Styles(); 
        else {
            player2CurrentScore += rndNum;
            player2_current_score.innerHTML = player2CurrentScore;
        }
    }
});

hold.addEventListener('click', () => {
    if(turn){
        if(player1CurrentScore == 0) return;

        player1TotalScore += player1CurrentScore;
        
        player2Styles();
        
        player1_total_score.innerHTML = player1TotalScore;

        if(player1TotalScore >= 10) {
            setTimeout(()=>{
                alert('PLAYER 1 WON...');
            },0);
            history.go(0);
        }
    } else {
        if(player2CurrentScore == 0) return;

        player2TotalScore += player2CurrentScore;
        
        player1Styles();
        
        player2_total_score.innerHTML = player2TotalScore;
        
        if(player2TotalScore >= 10) {
            setTimeout(()=>{
                alert('PLAYER 2 WON...');
            },0);
            history.go(0);
        }
    }
})


new_game.addEventListener('click', () => {
    window.location.reload();
})


function player1Styles(){
    player1.style.backgroundColor = 'pink';
    div_current_score1.style.backgroundColor = 'rgb(198, 30, 97)';
    player2.style.backgroundColor = 'rgb(0, 0, 0, .6)';
    div_current_score2.style.backgroundColor = 'rgb(198, 30, 97, 0)';
    
    player2CurrentScore = 0;
    player2_current_score.innerHTML = 0;
    turn = true;
}

function player2Styles(){
    player2.style.backgroundColor = 'pink';
    div_current_score2.style.backgroundColor = 'rgb(198, 30, 97)';
    player1.style.backgroundColor = 'rgb(0, 0, 0, .6)';
    div_current_score1.style.backgroundColor = 'rgb(198, 30, 97, 0)';
    
    player1CurrentScore = 0;
    player1_current_score.innerHTML = 0;
    turn = false;
}
