'use strict'
const containerWidth = 100
const containerHeight = 30
const ground = document.querySelector('.ground')
const rabbit = document.querySelector('.rabbit')
const container = document.querySelector('[data-container]')
resizeEverything()
window.addEventListener('resize', resizeEverything)



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


let lastUpdateTime
function update(timeNow) {
    if (lastUpdateTime === null) {
        lastUpdateTime = timeNow
        window.requestAnimationFrame(update)
        return
    }

    const diff = timeNow - lastUpdateTime

    lastUpdateTime = timeNow
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update) 