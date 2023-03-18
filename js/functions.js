function createParticles({ object, color, fade}) {
    for (let i = 0; i < 15; i++) {
        particles.push(new Particle({
            position: {
                x: object.position.x + object.width / 2,
                y: object.position.y + object.height / 2,
            },
            velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2,
            },
            radius: Math.random() * 3,
            color: color || '#BAA0DE',
            fade: fade

        }))
    }
}

function random_enemy_spawns() {
    if (frame % randomInterval === 0) {
        grids.push(new Grid())

        frame = 0
        randomInterval = Math.floor(Math.random() * 500) + 500
    }
}

function background_stars() {
    for (let i = 0; i < 101; i++) {
        particles.push(new Particle({
            position: {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
            },
            velocity: {
                x: 0,
                y: 0.3,
            },
            radius: Math.random() * 2,
            color: 'white',
            fade: false,
    
        }))
    }
}

function earn_score(perHitValue) {
    const scoreVal = document.querySelector('#scoreVal')
    score += perHitValue
    scoreVal.innerHTML = score
}