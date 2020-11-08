//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let currentMarker = 'X'
let board = [
  ['','',''],
  ['','',''],
  ['','','']
];
let gameOver = false;
let move = false;
let computerStart = false;



// is called when a square is clicked. "this" = element here, written as 'handleClick(this)' in HTML
function handleClick (element) {
  if (!document.getElementById(element.id).innerHTML) {
    addMarker (element.id)
    move = false;
    setTimeout(() =>{
      computerMove();
    },400)
  }
}

const computerMove = () =>{
  if (gameOver === false){
    computerLogic()
    while(move === false){
      let row = Math.floor(Math.random() * 3);
      let column = Math.floor(Math.random() * 3);
      if (board[row][column] === ''){
        console.log("computer", row, column);
        addMarker(row + "-" + column);
        move = true;
      }
    }
  }
}

const computerLogic = () => {
  // computer row win
  if (move === false){
    let rowX = 0;
    for (let i = 0; i < 3; i++){
      if ((board[i][0] === 'O' && board[i][1] === 'O') || (board[i][1] === 'O' && board[i][2] === 'O') || (board[i][0] === 'O' && board[i][2] === 'O')){
        rowX = i;
        for(let x = 0; x < 3; x++){
          let row = rowX;
          if(board[row][x] === ''){
            addMarker(row + '-' + x);
            move = true;
          }
        }
      }
    }
  }
  // computer blocking 'X' on row win
  if (move === false) {
    let rowX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[i][0] === 'X' && board[i][1] ==='X') || (board[i][1] === 'X' && board[i][2] ==='X') || (board[i][0] === 'X' && board[i][2] === 'X')) {
        rowX = i;
        for(let x = 0; x < 3; x++) {
        let row = rowOfX;
        if (board[row][x] === '') {
          addMarker(row + '-' + x);
          move = true;
          }
        }
      }``
    }
  }  
  // computer column win
  if (move === false){
    let columnX = 0;
    for(let i = 0; i < 3; i++){
      if ((board[0][i] === 'O' && board[1][0] ==='O') || (board[1][i] === 'O' && board[2][i] === 'O') || (board[0][i] === 'O' && board[2][i])){
        columnX = i;
        for(let x = 0; x < 3; x++){
          let column = columnX;
          if (board[x][column] === ''){
            addMarker(x + '-' + column)
            move = true;
          }
        }
      }
    }
  }
  // computer column block
  if (move === false) {
    let columnX = 0;
    for(let i = 0; i < 3; i++) {
      if ((board[0][i] === 'X' && board[1][i] ==='X') || (board[1][i] === 'X' && board[2][i] ==='X') || (board[0][i] === 'X' && board[2][i] ==='X')) {
        columnX = i;
        for(let x = 0; x < 3; x++) {
        let column = columnX;
        if (board[x][column] === '') {
          addMarker(x + '-' + column);
          move = true;
          }
        }
      }
    }
  }  
  // diagonal win 1
  if (move === false){
    if ((board[0][0] === 'O' && board[1][1] ==='O') || (board[1][1] === 'O' && board[2][2] ==='O') || (board[0][0] === 'O' && board[2][2] ==='O')){
      for(let i = 0; i < 3; i++){
        if (board[i][i] === ''){
          addMarker(i + '' + i);
          move=true
        }
      }
    }
  }
  // diagonal win 2
  if (move === false) {
    if ((board[2][0] === 'O' && board[1][1] ==='O') || (board[1][1] === 'O' && board[0][2] ==='O') || (board[2][0] === 'O' && board[0][2] ==='O')) {
         let a = 2;
         for (let i = 0; i < 3; i++) {
           if (board[a][i] === '') {
           addMarker(a + '-' + i);
           move = true;
         }
         a = a - 1;
       }
    }
  }
  // diagonal blocks
  if (move === false){
    if ((board[0][0] === 'X' && board[1][1] ==='X') || (board[1][1] === 'X' && board[2][2] ==='X') || (board[0][0] === 'X' && board[2][2] ==='X')){
      for(let i = 0; i < 3; i++){
        if (board[i][i] === ''){
          addMarker(i + '' + i);
          move=true
        }
      }
    }
  }
  if (move === false) {
    if ((board[2][0] === 'X' && board[1][1] ==='X') || (board[1][1] === 'X' && board[0][2] ==='X') || (board[2][0] === 'X' && board[0][2] ==='X')) {
          let a = 2;
          for (let i = 0; i < 3; i++) {
            if (board[a][i] === '') {
            addMarker(a + '-' + i);
            move = true;
          }
          a = a - 1;
        }
    }
  } 
}
// end } of computerLogic

const addMarker = (id) => {
  // @TODO, Mix & Match. 
  document.getElementById(id).innerHTML = currentMarker;
  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))

  board[row][column] = currentMarker
  // console.log(board)
  setTimeout(function() {
    checkForWin();
    }, 300)
}

// Computer player function

// Resets the game board
const resetBoard = () => {
  // sanity check: this tells us the function is being called
  // collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
  // loops over the HTML Collections and clears out the Xs and Os
  // @TODO, Your code here: make sure to reset the array of arrays to empty for a new game
  board =
      ['', '', ''],
      ['', '', ''],
      ['', '', ''];
  console.log("the board was cleared!")
  const squares = document.getElementsByTagName("TD")
  for (i = 0; i < squares.length; i++) {
      console.log(squares[i]);
      squares[i].innerHTML = "";
      location.reload();
      return false;
  }
};
const checkForTie = () => {
  let tie = true;
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      // console.log(board[i][x])
      if (board[i][x] == "") {
        tie = false;
        // console.log(board[i][x], i, x)
      }
    }
  } 
  // console.log({tie})
  if (tie) {
    window.alert(`Tie!`)
    winner.innerHTML = "It's a Tie! Try again."
    gameOver = true;
  }
}

const checkForWin = () => {
  // calls each checkForWin possibility and if any are true gives a page alert,
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    gameOver = true; 
    setTimeout(() => {
      window.alert(`Player ${currentMarker} won!`)
    }, 500)
  } else if(tieGame()) {
    gameOver = true;
    setTimeout(() => {
      window.alert('Tie!')
    }, 500)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  // @TODO, Your code here: to check for horizontal wins
  if (
    (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") ||
    (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") ||
    (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") ||
    (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") ||
    (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") ||
    (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
      return true;
    }
}

const verticalWin = () => {
  // @TODO, Your code here: to check for vertical wins
  if (
    (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") ||
    (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") ||
    (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") ||
    (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") ||
    (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") ||
    (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
      return true;
    }
}

const diagonalWin = () => {
  // @TODO, Your code here: to check for diagonal wins
  if (
    (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") ||
    (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") ||
    (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") ||
    (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")){
      return true;
    }
}


const tieGame = () => {
  if((board[0][0] === 'X' || board[0][0] === 'O') && 
    (board[0][1] === 'X' || board[0][1] === 'O') &&
    (board[0][2] === 'X' || board[0][2] === 'O') &&
    (board[1][0] === 'X' || board[1][0] === 'O') &&
    (board[1][1] === 'X' || board[1][1] === 'O') &&
    (board[1][2] === 'X' || board[1][2] === 'O') &&
    (board[2][0] === 'X' || board[2][0] === 'O') &&
    (board[2][1] === 'X' || board[2][1] === 'O') &&
    (board[2][2] === 'X' || board[2][2] === 'O')){
    return true;
    } 
}

const changeMarker = () => {
  // ternary operator: if it's an X make it an O, if O make it an X
  if(currentMarker === 'X'){
    currentMarker = 'O'
  } else {
    currentMarker = 'X'
  }
}



// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"