class Player {
    constructor(icon, color) {
        this.icon = icon
        this.color = color
        this.height = 100
        this.width = 100
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