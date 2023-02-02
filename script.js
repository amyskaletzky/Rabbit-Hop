'use strict'
const containerWidth = 100
const containerHeight = 30
const ground = document.querySelector('.ground')
const rabbit = document.querySelector('.rabbit')

resizeEverything()
window.addEventListener('resize', resizeEverything)
const container = document.querySelector('.container')
// function resizeGround() {
//     console.log('hi');
//     ground.style.width = window.innerWidth + 'px'
//     rabbit.style.width = (window.innerWidth * 0.1) + 'px'
//     rabbit.style.height = (window.innerHeight * 0.1) + 'px'
// }


function resizeEverything() {
    let containerToPixelScale
    if (window.innerWidth / window.innerHeight < containerWidth / containerHeight) {
        containerToPixelScale = window.innerWidth / containerWidth
    } else {
        containerToPixelScale = window.innerHeight / containerHeight
    }

    container.style.width = `${containerWidth * containerToPixelScale}px`
    container.style.height = `${containerHeight * containerToPixelScale}px`

}