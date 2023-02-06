'use strict'

const rabbitElement = document.querySelector('[data-rabbit]')
const HOP_SPEED = 0.45
const GRAVITY = 0.011

let isRunning
let isHopping
export function setUpRabbit() {
    isRunning = false
    isHopping = false
}



export function updateRabbit(diff, speedScale) {
    handleRun(diff, speedScale)
    handleHop(diff)
}

function handleRun(gameStart) {
    if (isHopping) {
        rabbitElement.src = `images/rabbit-hop.png`
        return
    }
    else {
        rabbitElement.src = `images/rabbit-run.gif`
    }

}

function handleHop(diff) {
    if (!isHopping) return



}