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
    console.log(diff);
    updatedMovingGround(diff);

    lastUpdateTime = timeNow
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update) 


//movingGround --Keren's part
const groundElements = document.querySelectorAll("[date-groundMoves]")
const speed = .05;

//In this function we are taking the current positing and updating it
///by taking a value from a css and converting it into a js value and back again to css variable
function updatedMovingGround(diff) {
    groundElements.forEach(ground /*from the css*/ => {
    finalIncrementCustomProp(ground, "--left",diff * speed * -1)
});
} 

//Due to lines 46,47 we have to make 3 functions
//because everything on css is a string we create a function that convert to a float(number)
/// and if there is not value just defult '0'

function getCustomProp(elem, prop) {
return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

//After converting the values to float we need to use the computerd values
function setCustomProp(elem, prop, value) {
elem.style.setProperty(prop, value)
}

function finalIncrementCustomProp(elem, prop, inc){
    setCustomProp(elem,prop,getCustomProp(elem,prop) + inc)
}