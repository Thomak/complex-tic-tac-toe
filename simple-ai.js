class AI {
    constructor(ai_icon, initPlayer) {
        this.ai_icon = ai_icon
        this.aiThinking = false
        this.currentPlayer = initPlayer
        this.combines = []
    }

    updateCurrentPlayer = (currentPlayer) => {
        this.currentPlayer = currentPlayer
    }

    aiOnTracker = () => {
        // do something for every second
        setInterval(() => {
            if (!this.aiThinking && this.currentPlayer ==  this.ai_icon) {
                aiOnPicking()
            }
        }, 1000)
    }
    
    aiOnPicking = () => {
        const winCombines = ['123','456','789','147','258','369','159','357']
        this.aiThinking = true

        const spanEl = 'spanEl'
        for (let i = 1; i <= 9; i++) {
            
        }
    }
}
