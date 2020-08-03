/*----- constants -----*/
// we need to track the number of times a availible box has been clicked

// we need to designate the player "guess" value
const p1Guess = 1;
const p2Guess = -1;
const color = null ; 
const winComb = { 
    1: ['block1','block2','block3'],
    2: ['block4','block5','block6'],
    3: ['block7','block8','block9'],
    4: ['block1','block4','block7'],
    5: ['block2','block5','block8'],
    6: ['block3','block6','block9'],
    7: ['block1','block5','block9'],
    8: ['block3','block5','block7'],
}

/*----- app's state (variables) -----*/
 let nbrClicks = 0;

// we need to see which boxes have been clicked and by who


sqrs = []
let winner = 0
let turn = 0



/*----- cached element references -----*/
const boxAns = {
    b1: [1, 0, -1],
    b2: [1, 0, -1],
    b3: [1, 0, -1],
    b4: [1, 0, -1],
    b5: [1, 0, -1],
    b5: [1, 0, -1],
    b6: [1, 0, -1],
    b7: [1, 0, -1],
    b8: [1, 0, -1],
    b9: [1, 0, -1],
}
/*----- event listeners -----*/

document.getElementById('sqrs').addEventListener("click",boxClick);
document.getElementById('reset').onclick.init();

/*----- functions -----*/

init();
//we need to track clicks and see if they are odd or even and have the clicks 
//give the boxes values and reder an X or an O value based on the click number
function clickCnt(evt){  for 
clickCnt = 
}

function boxClick(evt){
    const box = event.target.getElementById;
    if (  )
};




