function stopaudio(fileName) {
    fileName.pause();
    fileName.currentTime = 0;
}


const background_music =  document.getElementById('background_music')
background_music.volume = 0.1
background_music.loop = true

const playerProjectile_sound = document.getElementById('playerProjectileSound')
playerProjectileSound.volume = 0.1


const playerDie_sound = document.getElementById('playerDie')
playerDie_sound.volume = 0.1

const lose_music = document.getElementById('lose')
lose_music.volume = 0.2
