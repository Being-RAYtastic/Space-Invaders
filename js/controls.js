const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

window.addEventListener('keydown', (event) => {
    event.preventDefault()
    if(!game.over) {
        switch (event.key) {
            case 'a':
                keys.a.pressed = true
                break
            case 'd':
                keys.d.pressed = true
                break
            case ' ':
                if(!keys.space.pressed) {
                    projectiles.push(
                        new Projectile({
                            position: {
                                x: player.position.x + player.width / 2,
                                y: player.position.y,
                            },
                            velocity: {
                                x: 0,
                                y: -10,
                            },
                        }))
                        playerProjectile_sound.play()
                        playerProjectile_sound.currentTime = 0
                    keys.space.pressed = true
                }
                break
        }
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case ' ':
            keys.space.pressed = false
            break
    }
})

function controls_conditions() {
    if (keys.a.pressed && player.position.x >= 0) {
        player.velocity.x = -8
        player.rotation = -0.15
    }
    else if (keys.d.pressed && player.position.x + player.width <= canvas.width) {
        player.velocity.x = 8
        player.rotation = 0.15
    }
    else {
        player.velocity.x = 0
        player.rotation = 0
    }
    if (keys.space.pressed) {

        // console.log(projectiles)
    }
}