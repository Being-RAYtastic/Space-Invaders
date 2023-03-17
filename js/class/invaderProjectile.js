class InvaderProjectile {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.width = 3
        this.height = 10
    }

    draw() {
        c.fillStyle = 'white'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

function invaderProjectiles_update() {
    invaderProjectiles.forEach((invaderProjectile, index) => {
        if (invaderProjectile.position.y + invaderProjectile.height >= canvas.height) {
            setTimeout(() => {
                invaderProjectiles.splice(index, 1)
            }, 0)
        }
        else {
            invaderProjectile.update()
        }

        // player gets hit by enemy projectile 
        if (invaderProjectile.position.y + invaderProjectile.height >= player.position.y
            && invaderProjectile.position.x + invaderProjectile.width >= player.position.x
            && invaderProjectile.position.x <= player.position.x + player.width) {
                // console.log("You Lose")
                setTimeout(() => {  
                    invaderProjectiles.splice(index, 1)
                    player.opacity = 0,
                    game.over = true  
                }, 0)

                setTimeout(() => {  
                    game.active = false
                    }, 2000)

                createParticles({
                    object: player,
                    color: 'white'
                })
        }
    })
}