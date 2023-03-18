class Player {
    constructor() {

        this.velocity = {
            x: 0,
            y: 0,
        }
        this.rotation = 0
        this.opacity = 1

        const image = new Image()
        image.src = 'assets/img/spaceship.png'
        const scale = 0.15
        image.onload = () => {
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            
            this.position = {
                x: canvas.width / 2 - this.width,
                y: canvas.height - this.height - 20,
            }
        }

    }
    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.save()
        c.globalAlpha = this.opacity
        c.translate(
            player.position.x + player.width / 2,
            player.position.y + player.height / 2,
        )
        c.rotate(this.rotation)
        c.translate(
            -player.position.x - player.width / 2,
            -player.position.y - player.height / 2,
        )

        c.drawImage(
            this.image,
            this.position.x, this.position.y,
            this.width,
            this.height)
        c.restore()
    }

    update() {
        if (this.image) {
            this.draw()
            this.position.x += this.velocity.x
        }
    }
}

function player_update() {
    player.update();
}