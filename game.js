const innerBoxStyles = ['in-tl','in-tm','in-tr','in-ml','in-mm','in-mr','in-bl','in-bm','in-br']

class Game {
    constructor(player1, player2, ai) {
        this.width = canvas.width
        this.height = canvas.height
        this.player1 = player1
        this.player2 = player2
        this.isPlayer1Round = true
        this.blocks = {}
        this.winner = ''
        // winCombines = '123', '456', '147'
        this.p1Combines = []
        this.p2Combines = []
        this.ai = ai
    }

    drawBackground = () => {
        // drawing 4 lines for the basic cross
        ctx.fillStyle = 'black'
    
        let columnW = 20
        let columnH = this.height
        let rowW = this.width
        let rowH = 20
        console.log(columnW)
    
        // draw 4 lines
        // line column left
        let colleftX = this.width * 0.32
        console.log(colleftX)
        ctx.fillRect(colleftX, 0, columnW, columnH)
    
        // line column right
        let colrightX = this.width * 0.68
        ctx.fillRect(colrightX, 0, columnW, columnH)
    
        // line row top
        let rowtopY = this.height * 0.32
        ctx.fillRect(0, rowtopY, rowW, rowH)
    
        // line row bottom
        let rowbottomY = this.height * 0.68
        ctx.fillRect(0, rowbottomY, rowW, rowH)

    }

    drawPlayground = () => {
        const divBlockEl = document.querySelector('#div-sm-1')
        for (let i = 0; i < innerBoxStyles.length; i++) {
            let newSpanEl = document.createElement('span')
            const newid = `spanEl${i+1}`
            newSpanEl.id = newid
            newSpanEl.className = `gb-sm-items ${innerBoxStyles[i]}`
            divBlockEl.appendChild(newSpanEl)
            this.blocks[i+1] ={
                id: newid, 
                value: ''
            }
        }
    }

    playerAction = (elementID) => {
        try {
            if (!elementID.includes('span')) {
                throw 'Wrong Element selected'
            }
            // set blocks
            for (const key in this.blocks) {
                const thisBlock = this.blocks[key]
                if (thisBlock.id == elementID) {
                    if (thisBlock.value != '') {
                        throw 'Warning: block have been selected before, please try again'
                    } else {
                        thisBlock.value = (this.isPlayer1Round) ? this.player1.getIcon() : this.player2.getIcon()
                    }
                }
            }

            if (this.isPlayer1Round) {
                this.isPlayer1Round = false
                this.player1.input(elementID)
                if (this.ai != null) {
                    this.ai.updateCurrentPlayer()
                }
            } else {
                this.isPlayer1Round = true
                this.player2.input(elementID)
            }

            thisBlock.value = (this.isPlayer1Round && this.ai != null) ? this.ai.updateCurrentPlayer(this.player2.getIcon()) : this.ai.updateCurrentPlayer(this.player1.getIcon())
        } catch(ex) {
            console.log(ex)
        }
        
        
    } 

    checkWinCombines = () => {
        // console.log(`current block ${JSON.stringify(this.blocks)}`)

        if (this.blocks[1].value != '' && this.blocks[1].value == this.blocks[2].value && this.blocks[1].value == this.blocks[3].value) {
            const isP1Win = (this.blocks[1].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('123')
            } else {
                this.p2Combines.push('123')
            }

            alert(`${winner} won`)
            this.resetGame()
        }

        if (this.blocks[4].value != '' && this.blocks[4].value == this.blocks[5].value && this.blocks[4].value == this.blocks[6].value) {
            const isP1Win = (this.blocks[4].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('456')
            } else {
                this.p2Combines.push('456')
            }

            alert(`${winner} won`)
            this.resetGame()
        }

        if (this.blocks[7].value != '' && this.blocks[7].value == this.blocks[8].value && this.blocks[7].value == this.blocks[9].value) {
            const isP1Win = (this.blocks[7].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('789')
            } else {
                this.p2Combines.push('789')
            }

            alert(`${winner} won`)
            this.resetGame()
        }

        if (this.blocks[1].value != '' && this.blocks[1].value == this.blocks[4].value && this.blocks[1].value == this.blocks[7].value) {
            const isP1Win = (this.blocks[1].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('147')
            } else {
                this.p2Combines.push('147')
            }

            alert(`${winner} won`)
            this.resetGame()
        }

        if (this.blocks[2].value != '' && this.blocks[2].value == this.blocks[5].value && this.blocks[2].value == this.blocks[8].value) {
            const isP1Win = (this.blocks[2].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('258')
            } else {
                this.p2Combines.push('258')
            }

            alert(`${winner} won`)
            this.resetGame()
        }

        if (this.blocks[3].value != '' && this.blocks[3].value == this.blocks[6].value && this.blocks[3].value == this.blocks[9].value) {
            const isP1Win = (this.blocks[3].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('369')
            } else {
                this.p2Combines.push('369')
            }

            alert(`${winner} won`)
            this.resetGame()
        }

        if (this.blocks[1].value != '' && this.blocks[1].value == this.blocks[5].value && this.blocks[1].value == this.blocks[9].value) {
            const isP1Win = (this.blocks[1].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('159')
            } else {
                this.p2Combines.push('159')
            }

            alert(`${winner} won`)
            this.resetGame()
        }

        if (this.blocks[3].value != '' && this.blocks[3].value == this.blocks[5].value && this.blocks[3].value == this.blocks[7].value) {
            const isP1Win = (this.blocks[3].value == this.player1.getIcon()) ? true : false
            const winner = (isP1Win) ? this.player1.getIcon() : this.player2.getIcon()
            if (isP1Win) {
                this.p1Combines.push('357')
            } else {
                this.p2Combines.push('357')
            }

            alert(`${winner} won`)
            this.resetGame()
        }
    }

    resetGame = () => {
        for (const key in this.blocks) {
            const thisBlock = this.blocks[key]
            thisBlock.value = ''

            const thisBlockSpanEl = document.querySelector(`#${thisBlock.id}`)
            thisBlockSpanEl.innerHTML = ''
        }
        this.isPlayer1Round = true
    }

    roundPlayer = () => {
        if (this.isPlayer1Round) {
            this.isPlayer1Round = false
            return this.player1
        } else {
            this.isPlayer1Round = true
            return this.player2
        }
    }
}