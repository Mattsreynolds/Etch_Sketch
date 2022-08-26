
function populate(size) {
    let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach((div) => (div).remove());
board.style.gridTemplate = `repeat(${size} , 1fr) / repeat(${size}, 1fr)`
    


for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover',() => {
        square.style.backgroundColor = 'black';
    });
    square.style.backgroundColor = 'gray';    
    board.append(square)

}
}

populate(32)