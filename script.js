console.log("welcome to tic-tact-toe")

let turn_music= new Audio("mixkit-handgun-click-1660.mp3")
let gameover = new Audio("music.mp3")
let turn = "X"
let isgameover=false;
//function to change the turn 
const changeturn = function(){

    return turn === "X"?"0":"X"//if turn is "X" change to 0 otherwise change to X

}



const checkwin = function() {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    win.forEach(function(e) {
        // Check if the three boxes in the winning combination are the same and not empty
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && 
            boxtext[e[1]].innerText === boxtext[e[2]].innerText && 
            boxtext[e[0]].innerText !== "") {
            
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            
        }
    });
}


//main logic :-

let boxes = document.getElementsByClassName("box");

// Loop through each box and add a click event listener
Array.from(boxes).forEach(function(element) {
    let boxtext = element.querySelector(".boxtext");

    element.addEventListener("click", function() {
        // Check if the box is empty
        if (boxtext.innerText === "") {
            boxtext.innerText = turn; // Mark the box with the current player's symbol
            turn_music.play();
            turn = changeturn(); // Change the turn
            checkwin(); // Check if someone has won
            if(!isgameover){
            document.querySelector(".info").innerText = "Turn for " + turn; // Update the turn info
        }
    }
    });
});

//reset logic 

reset.addEventListener("click",function(){
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e  => {
        e.innerText="";
    });
    turn="X"
    isgameover=false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";



})


