//let color = 'black';
let t;
let square;

function populate(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => (div).remove());
    board.style.gridTemplate = `repeat(${size} , 1fr) / repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', changeColor) //=> {
        
       // });          
        board.append(square);
    }
}

populate(50)

document.querySelector('#userinput').addEventListener('click', function() {
    var userNumber = prompt("Enter a number between 2 and 100.");
    console.log(userNumber)    

if (userNumber > 1 && userNumber < 101) {
    populate(userNumber);
} else {
    alert('Invalid Number');
}

});

function rgb() {
    let t = document.getElementById("userrgb");
    if(t.value=="YES"){
        t.value="NO";}
    else if(t.value=="NO"){
        t.value="YES";}
    console.log(t);
}

function changeColor() {
    if (t == "YES") {
        square.style.backgroundColor = 
            '#'+Math.floor(Math.random()*16777215).toString(16);
    } else {
        square.style.backgroundColor = 'lightgray'; 
    }

}



