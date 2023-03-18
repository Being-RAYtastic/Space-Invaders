const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


const player = new Player()
const projectiles = []
// const invader = new Invader()
const grids = []
const invaderProjectiles = []
const particles = []

let game = {
    over: false,
    active: true,
}

const projectileDelay = 1000
let frame = 0
let randomInterval = Math.floor(Math.random() * 500) + 500
let score = 0

background_music.play()
background_stars()

function animate() {
    if (game.active) {
        requestAnimationFrame(animate)

        c.fillStyle = 'black'
        c.fillRect(0, 0, canvas.width, canvas.height)

        player_update()
        particles_update()
        projectiles_update()
        invaderProjectiles_update()

        // grids update
        grids.forEach((grid, gridIndex) => {
            grid.update()

            // random invader shooting
            if (frame % Math.floor((Math.random() * 100) + 100) === 0 && grid.invaders.length > 0) {
                grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(invaderProjectiles)
            }

            grid.invaders.forEach((invader, i) => {
                invader.update({ velocity: grid.velocity })
                
                // hitting invaders
                projectiles.forEach((projectile, j) => {
                    if (
                        projectile.position.y - projectile.radius <= invader.position.y + invader.height
                        && projectile.position.x + projectile.radius >= invader.position.x
                        && projectile.position.x - projectile.radius <= invader.position.x + invader.width
                        && projectile.position.y + projectile.radius >= invader.position.y
                    ) {

                        setTimeout(() => {
                            const invaderFound = grid.invaders.find(
                                (invader2) => invader2 === invader)

                            const projectileFound = projectiles.find(
                                (projectile2) => projectile2 === projectile)

                            if(invaderFound &&  projectileFound) {
                                earn_score(100)

                                createParticles({
                                    object: invader,
                                    fade: true,
                                })
                                grid.invaders.splice(i, 1)
                                projectiles.splice(j, 1)
                                
                                

                                // rearranging invaders grid position
                                if (grid.invaders.length > 0) {
                                    const firstInvader = grid.invaders[0]
                                    const lastInvader = grid.invaders[grid.invaders.length - 1]
                                    grid.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width
                                    grid.position.x = firstInvader.position.x
                                }
                                else {
                                    grids.splice(gridIndex, 1)
                                }
                            }
                        }, 0)


                    }

                })

                // inader physically hittig player when it touches player
                if (invader.position.y + invader.height >= player.position.y
                    && invader.position.x + invader.width >= player.position.x
                    && invader.position.x <= player.position.x + player.width) {
                        
                        playerLost()
                }
            })
        })



        controls_conditions()   // key Movements

        random_enemy_spawns()   //random enemy spawns

        frame++
    }
}


window.onload = animate()





