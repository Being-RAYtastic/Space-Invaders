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

const scoreVal = document.querySelector('#scoreVal')
const super_val_container = document.querySelector('.super-val-container')
const superVal = document.querySelector('#superVal')
function earn_score(perHitValue) {
    score += perHitValue
    scoreVal.innerHTML = score

    superPoints += perHitValue
    superVal.innerHTML = superPoints
    if(superPoints >= superPointsRequired) {
        super_val_container.style.color = 'yellow'
        superVal.innerHTML = superPointsRequired
    }
    
}

function playerLost() {
    // console.log("You Lose")
    setTimeout(() => {  
        player.opacity = 0,
        game.over = true  
    }, 0)

    setTimeout(() => {  
        game.active = false
    }, 2000)
    
    playerDie_sound.play()    
    createParticles({
        object: player,
        color: 'white',
        fade: true,
    })
    background_music.pause()
    lose_music.play()

    const game_over_box =  document.querySelector('.game-over-box')
    game_over_box.style.opacity = 1
    game_over_box.style.visibility = 'visible'
    const currentScore = document.querySelector('#currentScore')
    currentScore.innerHTML = score
    
    const replay_btn = document.querySelector('.replay-btn')
    replay_btn.style.opacity = 1
    replay_btn.style.visibility = 'visibles'

}