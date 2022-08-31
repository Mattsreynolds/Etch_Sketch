let color = 'black';
let t = document.getElementById("userrgb");

function populate(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => (div).remove());
    board.style.gridTemplate = `repeat(${size} , 1fr) / repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', changeColor); 
        // => {
        //     square.style.backgroundColor = 
        //     '#'+Math.floor(Math.random()*16777215).toString(16);
        // });        
        square.style.backgroundColor = 'lightgray'; 
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
    if(t.value=="YES"){
        t.value="NO";
        let element = document.getElementById("userrgb");
        element.classList.remove("color");
    }else if(t.value=="NO"){
        t.value="YES";
        let element = document.getElementById("userrgb");
        element.classList.add("color");
    }
    
}

function changeColor() {
    if (t.value=="NO") {
        this.style.backgroundColor = color;
        
    } else {
        this.style.backgroundColor = 
            '#'+Math.floor(Math.random()*16777215).toString(16);
            
    }

}



