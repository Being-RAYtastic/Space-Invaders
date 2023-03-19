class Invader {
    constructor({ position }) {

        this.velocity = {
            x: 0,
            y: 0,
        }
        this.position = {
            x: position.x,
            y: position.y,
        }

        const image = new Image()
        image.src = 'assets/img/invader.png'
        const scale = 1
        image.onload = () => {
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale


        }

    }
    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
            this.image,
            this.position.x, this.position.y,
            this.width,
            this.height)
    }

    update({ velocity }) {
        if (this.image) {
            this.draw()
            this.position.x += velocity.x
            this.position.y += velocity.y
        }
    }

    shoot(invaderProjectiles) {
        invaderProjectiles.push(new InvaderProjectile({
            position: {
                x: this.position.x + this.width / 2,
                y: this.position.y + this.height
            },
            velocity: {
                x: 0,
                y: 5,
            }
        }))
    }
}