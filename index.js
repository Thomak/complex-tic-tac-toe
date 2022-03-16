
getMousePos = (canvas, evt) => {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

const game = new Game(new Player('O', 'red'), new Player('X', 'blue'))

window.addEventListener('click', (evt) => {
    // let {x, y} = getMousePos(canvas, evt)
    // const currentPlayer = game.roundPlayer()
    // currentPlayer.paint(x, y)
    // currentPlayer.input(evt.target.id)

    game.playerAction(evt.target.id)
    game.checkWinCombines()
})

// exec func.
game.drawBackground()
game.drawPlayground()