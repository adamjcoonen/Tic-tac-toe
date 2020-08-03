/*----- constants -----*/
// we need to track the number of times a availible box has been clicked

// we need to designate the player "guess" value
const lookUp = { 
    "1"  : "purple",
    "-1" : "lime",
    null : "white",
}
const winComb = { 
    1: ['b1','b2','b3'],
    2: ['b4','b5','b6'],
    3: ['b7','b8','b9'],
    4: ['b1','b4','b7'],
    5: ['b2','b5','b8'],
    6: ['b3','b6','b9'],
    7: ['b1','b5','b9'],
    8: ['b3','b5','b7'],
}

/*----- app's state (variables) -----*/
 
let boxAns , turn, winner;








/*----- cached element references -----*/
const squares = document.querySelectorAll("table");
const message = document.querySelector('#reset');


/*--------------Event Listeners------------------*/ 
const boxAns = document.querySelectorAll('#sqrs').addEventListener('click',handleMove);
const message = document.querySelector('#reset').addEventListener('click', init);


/*----- functions -----*/
function init() {
    boxAns = [null, null, null, null, null, null, null , null, null];
    turn = 1;
    winner = null;
    render();

}







function render(){
    console.log(boxAns , "these are the ")
    board.forEach(function(squares, idx){
        boxAns[idx].style.backgroundColor = lookUp[squares];
        
    });
}
function handleMove(event){
    const index = parseInt(event.target.id.replace("sqrs",""));
    if (board[index]) {
        return;
    board[index] = turn;
    turn *= -1;
    render();
    }

}

init();
