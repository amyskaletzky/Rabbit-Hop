'use strict'

const CONTAINER_WIDTH = 100
const CONTAINER_HEIGHT = 30
const INCREASE_SPEED_BY = 0.00001


const ground = document.querySelector('.ground')
const rabbit = document.querySelector('.rabbit')
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
    if (lastUpdateTime === null) {
        lastUpdateTime = timeNow
        window.requestAnimationFrame(update)                //write explanation
        return
    }

    const diff = timeNow - lastUpdateTime

    // add another parameter to updateGround(diff, speedScale)
    increaseSpeedGradually(diff)
    updateScore(diff)

    lastUpdateTime = timeNow
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)

function increaseSpeedGradually(diff) {
    speedScale += diff * INCREASE_SPEED_BY          // to cause the ground to gradually move faster, like in the original game so it becomes more and more difficult
}

function updateScore(diff) {
    if (!hasGameStarted) score = 0
    score += diff * 0.01      // one point added to score for every 100ms that pass
    scoreElement.textContent = Math.floor(score)
}


function startGame() {
    hasGameStarted = true
    lastUpdateTime = null
    speedScale = 1
    score = 0
    startElement.classList.add('hide')
    // call the set up ground function here !!!
    window.requestAnimationFrame(update)
}


function resizeEverything() {
    let containerToPixelScale
    if (window.innerWidth / window.innerHeight < CONTAINER_WIDTH / CONTAINER_HEIGHT) {
        containerToPixelScale = window.innerWidth / CONTAINER_WIDTH
    } else {
        containerToPixelScale = window.innerHeight / CONTAINER_HEIGHT
    }

    container.style.width = `${CONTAINER_WIDTH * containerToPixelScale}px`
    container.style.height = `${CONTAINER_HEIGHT * containerToPixelScale}px`
    // to make sure everything inside container is responsive (rabbit and ground, etc)
}


