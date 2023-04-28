const htmlBoard = document.querySelector('.board'); // html board container

const board = [
    [01,02,03,04,05,06,07,08],
    [09,10,11,12,13,14,15,16],
    ['0','','','','','','','90'],
    ['80','','','','4','9','','00'],
    ['','','','','','','',''],
    ['','','','','','','','0'],
    [17,18,19,20,21,22,23,24],
    [25,26,27,28,29,30,31,32]
]
  

class Renderhtml {
    constructor(x, element) {
        this.boardArray = x;
        this.element = element;

    }

    innerhtml(smallArr) {
        let justStr = ''
        for (let e = 0; e < smallArr.length; e++){
            justStr += `
                <div class="${e % 2 == 0 ? 'cells light' : 'cells dark'}"> ${smallArr[e]}</div>
            `
        }
        return justStr;
    }

    pickPiece(e) {
        //picking a piece
        let piece = e.target.textContent;
        if (piece !== null)
            console.log(e.target);
            return piece;
        
    }

    getPieceRow() {
        // getting the board row
        const row = board.find(col => col.includes(this.pickPiece));
        return row
    }

    action() {
           //main action
    }

    
    render() {
        // rendering the board

        for (let i = 0; i < this.boardArray.length; i++)
            this.element.innerHTML += `
                <div class='${i % 2 == 0 ? 'cols' : 'cols1'}'>
                    ${this.innerhtml(this.boardArray[i])}
                </div>
            `
    }
}

let chessGame = new Renderhtml(board, htmlBoard)
chessGame.render();