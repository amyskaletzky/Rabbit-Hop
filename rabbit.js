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
    // if
    if (isHopping) {
        rabbitElement.src = `images/rabbit-hop.png`
        return
    }
    else {
        rabbitElement.src = `images/rabbit-run.png`
        rabbitElement.style.height = '40%'
    }
    // if (gameStart && !isHopping) {
    //     rabbitElement.src = `images/rabbit-run.png`

    // }   //trying to figure out how to make rabbit run img as soon as game starts/begins

}

function handleHop(diff) {
    if (!isHopping) return



}