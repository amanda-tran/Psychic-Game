//Initial Variables
var letter = "";
var winCount = 0;
var lossCount = 0;
var keysPressed = [];
var guessesLeft = 9;

//updates the HTML with the JS
function update(){
    document.getElementById("win-count").innerHTML = winCount;
    document.getElementById("loss-count").innerHTML = lossCount;
    document.getElementById("guess-count").innerHTML = guessesLeft;
    document.getElementById("keys-pressed").innerHTML = keysPressed;
}

//resets the game if you win/lose
function reset(){
    guessesLeft = 9;
    keysPressed = [];
    letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
    console.log(letter);

}

//handles guessing and increments/deincrements win/loss ratio
function guess(key){
    if(key === letter){
        winCount++;
        reset();
        
    } else {
        if(guessesLeft === 1){
            lossCount++;
            reset();
        } else {
            guessesLeft--;
        }

    }

    update();
}

//reads each key pressed
window.onkeypress = function(e){
    var input = String.fromCharCode(e.keyCode);
    keysPressed.push(input);
    guess(input);
    
}

//resets/updates the game/html when user loads page
reset();
update();









