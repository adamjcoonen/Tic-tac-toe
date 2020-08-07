/*----- constants -----*/
// we need to track the number of times a availible box has been clicked

// we need to designate the player "guess" value
const lookUp = { 
    "1"  : "red",
    "-1" : "blue",
    null : "white",
};
const winComb = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6'],
];

/*----- app's state (variables) -----*/
 
let boxAns, turn, winner;








/*----- cached element references -----*/
const squares = document.querySelectorAll("section div");
const message = document.getElementById('reset');
const cells = document.querySelector('section')

/*--------------Event Listeners------------------*/ 
cells.addEventListener('click',handleMove)
message.addEventListener('click',init)


/*----- functions -----*/
init();


function init() {
    boxAns = [null, null, null, null, null, null, null , null, null];
    turn = 1;
    winner = null;
    render();

}


function checkWinner(){

    for (let i = 0 ; i < winComb.length; i++){ 
        if (Math.abs(boxAns[winComb[i][0]] +  boxAns[winComb[i][1]] + boxAns[winComb[i][2]]) === 3) return boxAns[winComb[i][0]]; 
    }

        if (boxAns.includes(null)) return null;
        return 'tGame';

    }
function render(){
    boxAns.forEach(function(square, idx){
        squares[idx].style.background = lookUp[square];
        
    });
    if (winner === 'tGame' ) {
        message.innerHTML = " It was a tie, try again"
    } else if (winner)
            { message.innerHTML = ' way to go ' + lookUp[winner]+ '!'
}   else { message.innerHTML = ""+lookUp[turn]+' its your turn.'
    }
}
function handleMove(event){
    // this is the way I retrieve the index of the boxes that are selected
    const index = event.target.id;
    if (boxAns[index] || winner) {
        return;}
    boxAns[index] = turn;
    turn *= -1;
    winner = checkWinner()
    render();
    }    
