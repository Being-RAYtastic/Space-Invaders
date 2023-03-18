function stopaudio(fileName) {
    fileName.pause();
    fileName.currentTime = 0;
}

const playerProjectileSound = new Audio('../assets/sounds/playerProjectile.mp3')
playerProjectileSound.volume = 0.2



const background_music =  new Audio('../assets/sounds/background.mp3')
background_music.volume = 0.4
background_music.loop = true
