class Player {
    constructor(icon, color, ai) {
        this.icon = icon
        this.color = color
        this.height = 100
        this.width = 100
        this.ai = ai

        if (this.ai != null) {
            this.ai.aiOnTracker()
        }
    }

    paint = (x, y) => {
        ctx.beginPath()
        ctx.rect(x, y, this.width, this.height);
        ctx.strokeStyle = this.color
        ctx.stroke()
        ctx.closePath()
    }

    input = (id) => {
        let selectedEl = document.querySelector(`#${id}`)
        selectedEl.innerHTML = this.icon
    }

    getIcon = () => {
        return this.icon
    }
}