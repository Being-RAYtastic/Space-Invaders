function stopaudio(fileName) {
    fileName.pause();
    fileName.currentTime = 0;
}

const playerProjectileSound = document.getElementById('playerProjectileSound')
playerProjectileSound.volume = 0.1



const background_music =  document.getElementById('background_music')
background_music.volume = 0.1
background_music.loop = true
