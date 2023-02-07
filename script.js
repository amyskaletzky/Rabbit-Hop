import { updateGround, setupGround } from "./ground.js"
import { updateRabbit, setUpRabbit } from './rabbit.js'
import { updateEasterEggs, setupEasterEggs } from './easterEggs.js'


const CONTAINER_WIDTH = 100
const CONTAINER_HEIGHT = 30
const INCREASE_SPEED_BY = 0.00001


const container = document.querySelector('[data-container]')
const scoreElement = document.querySelector('[data-score]')
const startElement = document.querySelector('[data-start]')

resizeEverything()
window.addEventListener('resize', resizeEverything)
document.addEventListener('keydown', startGame, { once: true }) // making sure it only calls the function once

let lastUpdateTime
let speedScale
let score
let hasGameStarted = false
function update(timeNow) {
    if (lastUpdateTime == null) {
        lastUpdateTime = timeNow
        window.requestAnimationFrame(update)
        return
    }
    const diff = timeNow - lastUpdateTime

    updateGround(diff, speedScale)
    updateRabbit(diff, speedScale)
    updateEasterEggs(diff, speedScale)
    updateSpeedScale(diff)
    updateScore(diff)

    lastUpdateTime = timeNow
    window.requestAnimationFrame(update)
}

function updateSpeedScale(diff) {
    speedScale += diff * INCREASE_SPEED_BY          // to cause the ground to gradually move faster, like in the original game so it becomes more and more difficult
}

function updateScore(diff) {
    if (!hasGameStarted) score = 0
    score += diff * 0.01            // one point added to score for every 100ms that pass
    scoreElement.textContent = Math.floor(score)
}


function startGame() {
    hasGameStarted = true
    lastUpdateTime = null
    speedScale = 1
    score = 0

    setupGround()
    setUpRabbit()
    setupEasterEggs()

    startElement.classList.add('hide')
    window.requestAnimationFrame(update)
}

// this function makes sure everything inside the container is responsive (rabbit and ground, etc)
function resizeEverything() {
    let containerToPixelScale
    if (window.innerWidth / window.innerHeight < CONTAINER_WIDTH / CONTAINER_HEIGHT) {
        containerToPixelScale = window.innerWidth / CONTAINER_WIDTH
    } else {
        z
        containerToPixelScale = window.innerHeight / CONTAINER_HEIGHT
    }

    container.style.width = `${CONTAINER_WIDTH * containerToPixelScale}px`
    container.style.height = `${CONTAINER_HEIGHT * containerToPixelScale}px`
}



